# IIS Default Page Archive

Recreations of the stock `iisstart.htm` Default Web Site page that ships in
`C:\inetpub\wwwroot`, one folder per IIS version. Everything from 7.0 onward is
reproduced byte-for-byte from genuine captures (live server responses + committed
copies). 6.0 is a labeled reconstruction.

## Version map

| Folder | IIS | Windows | Template | Page image | `<title>` |
|--------|-----|---------|----------|-----------|-----------|
| `iis-6.0_server2003`        | 6.0  | Server 2003                | "Under Construction" static page | `pagerror.gif` | `Under Construction` |
| `iis-7.0_vista-server2008`  | 7.0  | Vista / Server 2008        | "IIS7" multilingual splash       | `welcome.png` (571x411) | `IIS7` |
| `iis-7.5_win7-server2008r2` | 7.5  | Win 7 / Server 2008 R2     | identical to 7.0                 | `welcome.png` (571x411) | `IIS7` |
| `iis-8.0_win8-server2012`   | 8.0  | Win 8 / Server 2012        | microsoft.com/web composited     | `bkg-blu.jpg` + `iis-8.png` + `msweb-brand.png` + `w-brand.png` | `Microsoft Internet Information Services 8` |
| `iis-8.5_win81-server2012r2`| 8.5  | Win 8.1 / Server 2012 R2   | single-image on #0072C6          | `iis-85.png` (960x600) | `IIS Windows Server` (server) / `IIS Windows` (client) |
| `iis-10_win10-client`       | 10.0 | Windows 10                 | single-image on #0072C6          | `iis.png` (960x600) | `IIS Windows` |
| `iis-10_server2016plus`     | 10.0 | Server 2016 / 2019 / 2022  | single-image on #0072C6          | `iisstart.png` (960x600) | `IIS Windows Server` |

## The three eras

1. **Under Construction (6.0)** - plain text page, `pagerror.gif`, white background.
2. **welcome.png splash (7.0 / 7.5)** - the saturated blue "IIS7" tile with "welcome"
   in ~30 languages, on a #B3B3B3 gray body. The 689-byte `iisstart.htm` just centers
   one image. 7.0 and 7.5 are identical.
3. **#0072C6 single image (8.5 / 10)** - the flat Metro "Internet Information Services"
   composition baked into one 960x600 PNG on solid blue. Same markup across 8.5 and 10;
   only the image filename and title change (`iis-85.png` -> `iis.png` -> `iisstart.png`).

   The odd one out is **8.0**, which used the transitional *microsoft.com/web* design:
   a pale geometric background (`bkg-blu.jpg`) with the IIS hero, the Microsoft.com/Web
   wordmark, and the Windows flag stacked and assembled via CSS. The glossy four-pane
   flag in `w-brand.png` rode along unchanged into Win 10's assets, so it is not a
   reliable version tell.

## Image assets (not included - pull from a real install)

The HTML references images Microsoft ships; the binaries aren't redistributed here.
Cleanest source for a recreation project: spin up each OS in a VM and grab
`C:\inetpub\wwwroot` after enabling the Web Server role.

You already have:
- `bkg-blu.jpg`, `msweb-brand.png`, `w-brand.png`  -> IIS 8.0
- `iis.png`                                          -> IIS 10 (client)

Still to source:
- `pagerror.gif`   -> IIS 6.0   (Server 2003)
- `welcome.png`    -> IIS 7.0 / 7.5   (Server 2008 / 2008 R2, Win 7)
- `iis-8.png`      -> IIS 8.0   (the hero that sits on bkg-blu.jpg; Win 8 / Server 2012)
- `iis-85.png`     -> IIS 8.5   (Win 8.1 / Server 2012 R2)
- `iisstart.png`   -> IIS 10    (Server 2016+)

## Notes

- All files use CRLF line endings to match the Windows originals.
- The `fwlink` target `linkid=66138` (and `LinkID=209092` on 8.0) is Microsoft's
  generic IIS redirect; it still resolves.
- IIS 5.0/5.1 (Win 2000 / XP) are in `iis-5.x_win2000-xp/` - an ASP pair
  (`iisstart.asp` + `localstart.asp`), not a flat splash. See that folder's README.
- IIS 4.0 and earlier: see `IIS-4.0-and-earlier-FINDINGS.md`. 4.0 is recovered
  (`iis-4.0_nt4-optionpack/default.asp`); 1.0-3.0 are documented but lost.
