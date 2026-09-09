$root = 'c:\Users\Peuve\Desktop\PORTFOLIO_GIT'
$port = 8770
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://127.0.0.1:$port/")
$listener.Start()
Write-Output "Serving http://127.0.0.1:$port/"
$pool = [System.Threading.ThreadPool]
while ($listener.IsListening) {
    $result = $listener.BeginGetContext($null, $null)
    $ctx = $listener.EndGetContext($result)
    [System.Threading.ThreadPool]::QueueUserWorkItem({
        param($state)
        $c = $state
        try {
            $path = [Uri]::UnescapeDataString($c.Request.Url.LocalPath.TrimStart('/'))
            if ([string]::IsNullOrWhiteSpace($path)) { $path = 'index.html' }
            $full = [IO.Path]::GetFullPath((Join-Path $root ($path -replace '/', [IO.Path]::DirectorySeparatorChar)))
            if (-not $full.StartsWith($root, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $full) -or (Get-Item -LiteralPath $full).PSIsContainer) {
                $c.Response.StatusCode = 404
                return
            }
            $item = Get-Item -LiteralPath $full
            # Skip huge media during QA to keep the server responsive
            if ($item.Length -gt 8MB -and $item.Extension -match '\.(mp4|webm|gif)$') {
                $c.Response.StatusCode = 204
                return
            }
            $ext = $item.Extension.ToLower()
            $ctype = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.css' { 'text/css; charset=utf-8' }
                '.js' { 'application/javascript; charset=utf-8' }
                '.json' { 'application/json' }
                '.webp' { 'image/webp' }
                '.png' { 'image/png' }
                '.jpg' { 'image/jpeg' }
                '.jpeg' { 'image/jpeg' }
                '.gif' { 'image/gif' }
                '.svg' { 'image/svg+xml' }
                '.mp4' { 'video/mp4' }
                '.webm' { 'video/webm' }
                default { 'application/octet-stream' }
            }
            $bytes = [IO.File]::ReadAllBytes($full)
            $c.Response.StatusCode = 200
            $c.Response.ContentType = $ctype
            $c.Response.ContentLength64 = $bytes.Length
            $c.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        } catch {
            try { $c.Response.StatusCode = 500 } catch {}
        } finally {
            try { $c.Response.OutputStream.Close() } catch {}
            try { $c.Response.Close() } catch {}
        }
    }, $ctx) | Out-Null
}
