using System;
using System.IO;
using System.Net;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Text.RegularExpressions;

class Program {
  static string RecvAll(ClientWebSocket ws) {
    var buf = new byte[8 * 1024 * 1024];
    var ms = new MemoryStream();
    while (true) {
      var r = ws.ReceiveAsync(new ArraySegment<byte>(buf), CancellationToken.None).Result;
      ms.Write(buf, 0, r.Count);
      if (r.EndOfMessage) break;
    }
    return Encoding.UTF8.GetString(ms.ToArray());
  }

  static string Call(ClientWebSocket ws, ref int id, string method, string paramsJson) {
    int myId = id++;
    string msg = "{\"id\":" + myId + ",\"method\":\"" + method + "\",\"params\":" + paramsJson + "}";
    byte[] bytes = Encoding.UTF8.GetBytes(msg);
    ws.SendAsync(new ArraySegment<byte>(bytes), WebSocketMessageType.Text, true, CancellationToken.None).Wait();
    for (int i = 0; i < 50; i++) {
      string resp = RecvAll(ws);
      if (resp.Contains("\"id\":" + myId)) return resp;
    }
    return "";
  }

  static string ExtractValue(string resp) {
    var m = Regex.Match(resp, "\"value\"\\s*:\\s*\"((?:\\\\.|[^\"\\\\])*)\"");
    if (m.Success) return Regex.Unescape(m.Groups[1].Value);
    return resp.Length > 500 ? resp.Substring(0, 500) : resp;
  }

  static string Http(string method, string url) {
    var req = (HttpWebRequest)WebRequest.Create(url);
    req.Method = method;
    req.Timeout = 10000;
    using (var resp = (HttpWebResponse)req.GetResponse())
    using (var sr = new StreamReader(resp.GetResponseStream()))
      return sr.ReadToEnd();
  }

  static void Capture(ClientWebSocket ws, string outDir, int w, int h, string name) {
    int id = 1;
    Call(ws, ref id, "Emulation.setDeviceMetricsOverride", "{\"width\":" + w + ",\"height\":" + h + ",\"deviceScaleFactor\":1,\"mobile\":" + (w <= 768 ? "true" : "false") + "}");
    Call(ws, ref id, "Page.enable", "{}");
    Call(ws, ref id, "Runtime.enable", "{}");
    Call(ws, ref id, "Page.navigate", "{\"url\":\"http://127.0.0.1:8770/?qa=1\"}");
    Thread.Sleep(3500);
    string expr = "(function(){var scrollW=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);var clientW=document.documentElement.clientWidth;var menu=document.querySelector('.main-menu');var bot=document.querySelector('.bot-bar');var btn=document.querySelector('#mobile-menu-btn');var slides=[].slice.call(document.querySelectorAll('.swiper-slide'));var md=menu?getComputedStyle(menu).display:null;var mr=(menu&&md!=='none')?menu.getBoundingClientRect():null;var br=bot.getBoundingClientRect();var links=[].slice.call(document.querySelectorAll(innerWidth<=768?'#mobile-menu-panel a':'.main-menu a'));return JSON.stringify({w:innerWidth,h:innerHeight,ox:scrollW>clientW+1,scrollW:scrollW,clientW:clientW,stack:getComputedStyle(document.documentElement).getPropertyValue('--peuve-stack-bottom').trim(),introDone:document.body.classList.contains('intro-done'),menuDisplay:md,menuH:mr?Math.round(mr.height):null,menuTop:mr?Math.round(mr.top):null,menuBottom:mr?Math.round(mr.bottom):null,botTop:Math.round(br.top),botH:Math.round(br.height),menuOverBot:!!(mr&&mr.bottom>br.top+2),btn:btn?{d:getComputedStyle(btn).display,w:Math.round(btn.getBoundingClientRect().width),h:Math.round(btn.getBoundingClientRect().height)}:null,slides:slides.length,slideOx:slides.some(function(s){return s.getBoundingClientRect().right>clientW+2;}),first:links[0]?links[0].textContent:null,last:links.length?links[links.length-1].textContent:null,active:[].slice.call(document.querySelectorAll('a.is-active')).map(function(a){return a.getAttribute('data-categoria');})});})()";
    string esc = expr.Replace("\\", "\\\\").Replace("\"", "\\\"");
    string evalResp = Call(ws, ref id, "Runtime.evaluate", "{\"expression\":\"" + esc + "\",\"returnByValue\":true}");
    File.WriteAllText(Path.Combine(outDir, name + ".json"), ExtractValue(evalResp));
    string shot = Call(ws, ref id, "Page.captureScreenshot", "{\"format\":\"png\",\"fromSurface\":true}");
    var dm = Regex.Match(shot, "\"data\"\\s*:\\s*\"([^\"]+)\"");
    if (dm.Success) {
      File.WriteAllBytes(Path.Combine(outDir, name + ".png"), Convert.FromBase64String(dm.Groups[1].Value));
      Console.WriteLine(name + " png ok");
    } else Console.WriteLine(name + " png fail");
  }

  static void Main() {
    string outDir = @"c:\Users\Peuve\Desktop\PORTFOLIO_GIT\_qa";
    Directory.CreateDirectory(outDir);
    string list = Http("GET", "http://127.0.0.1:9222/json/list");
    var wsMatch = Regex.Match(list, "\"webSocketDebuggerUrl\"\\s*:\\s*\"([^\"]+)\"");
    if (!wsMatch.Success) { Console.WriteLine("No page websocket. list=" + list); return; }
    using (var ws = new ClientWebSocket()) {
      ws.ConnectAsync(new Uri(wsMatch.Groups[1].Value), CancellationToken.None).Wait();
      Capture(ws, outDir, 1125, 820, "tablet-1125");
      Capture(ws, outDir, 768, 900, "mobile-768");
      Capture(ws, outDir, 390, 844, "mobile-390");
    }
  }
}
