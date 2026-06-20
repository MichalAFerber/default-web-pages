# IIS 5.0 / 5.1 - localstart.asp + iisstart.asp

IIS 5.x (Windows 2000 = IIS 5.0, Windows XP Pro = IIS 5.1) didn't ship a flat
splash. The Default Web Site served a two-file ASP pair that branched on whether
you were browsing from the server itself:

```
request -> iisstart.asp (default document)
              |
              |-- local  (SERVER_NAME=localhost OR LOCAL_ADDR == REMOTE_ADDR)
              |        -> Response.Redirect "localstart.asp"   (rich welcome page)
              |
              `-- remote -> "Under Construction" message
                            (also forced by ?uc=1)
```

So an admin sitting at the console got the "Welcome to Windows XP Server Internet
Services" page (server info, feature blurbs, links to the MMC console and the IIS
help docs); anyone hitting it over the network got "Under Construction." This is
exactly the `GetObject("IIS://localhost/w3svc/...")` ADSI call that throws the
classic `localstart.asp line 19 permission denied` error when the anonymous account
can't read the metabase.

## Files

- `iisstart.asp`    - default document / gateway + Under Construction page
- `localstart.asp`  - local-only welcome page, the genuine ASP source
- `LOCALSTART.HTM`  - the same page as a live IIS 5.1 box actually rendered it (opens standalone)
- `WINXP.GIF`, `WARNING.GIF`, `WEB.GIF`, `MMC.GIF`, `HELP.GIF`, `PRINT.GIF` - the genuine page artwork

## Provenance - now fully genuine

`localstart.asp` is no longer a reconstruction. It's assembled from two authentic
captures of real IIS 5.1 boxes:

- the **ASP header** (the ADSI `GetObject` / `FileSystemObject` / `Select Case` logic)
  came from a server that was leaking its raw `.asp` source;
- the **body, CSS, and JavaScript** came from an HTTrack mirror of a live IIS 5.1 box
  (preserved at `lexi.re/LOCALSTART.HTM`, signed by HTTrack on 2024-06-22). That's the
  rendered output, so the only edit to turn it back into source was re-inserting the
  template expressions the server had already resolved: `<%=sDefDoc%>`, `<%=sPhyspath%>`,
  `activate(<%=iVer%>)`, and the `<% If Not bSuccess %>` wrapper around the
  "no default page" notice.

So the previously-stubbed helpers are now the real thing:

- `loadHelpFront()` -> `window.open("http://localhost/iishelp/", ...)` after resizing the
  window; the page literally moves and resizes the browser on load.
- `activate(ServerVersion)` -> opens a version-specific snap-in help topic
  (5.0 -> `iisnapin.htm`, 5.1 -> `iiabuti.htm`, 6.0 -> `gs_iissnapin.htm`).

`LOCALSTART.HTM` is that mirror cleaned up: lexi.re's injected `atom.xml` feed line and
HTTrack's rename of the `?uc=1` link both reverted. Open it in a browser and it renders
(it'll also try to resize your window - authentic 2001 behavior). The artwork GIFs are
the genuine files from the same mirror.

## 5.0 (Windows 2000) vs 5.1 (Windows XP)

Same ASP skeleton (the `Select Case` already detects 5.0). Only hardcoded strings
differ - title becomes "Welcome to Windows 2000 Internet Services", "IIS 5.1 /
Windows XP Professional" becomes "IIS 5.0 / Windows 2000", and the banner graphic
`winXP.gif` becomes the Windows 2000 equivalent. Inline `5.0:` comments mark each.

## Images

The six welcome-page GIFs are now included (genuine, from the mirror). Still external:

- `pagerror.gif` - the Under Construction icon used by `iisstart.asp` (same asset as 6.0)

For the 5.0 (Windows 2000) look, swap `WINXP.GIF` for the Windows 2000 banner and apply
the `5.0:` string changes noted above.

## Running it

Needs classic ASP. On a modern Windows box: enable IIS + "ASP" role feature, drop
these in `wwwroot`. The ADSI/FileSystemObject calls assume the legacy metabase, so
on IIS 7+ install "IIS 6 Metabase Compatibility" or expect the `GetObject` line to
fault - the Under Construction branch still renders fine regardless.
