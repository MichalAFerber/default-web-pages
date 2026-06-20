# IIS 4.0 and earlier - findings

How far back the recreation can honestly go, and where the trail ends.

**Short version:** IIS 4.0 is the oldest default page recoverable as genuine source -
several un-migrated NT4 boxes are still serving it in 2026. For 1.0 through 3.0 the
default pages are effectively lost: no reliable public copy survives, so this file
documents what they *were* rather than handing you bytes to drop in `wwwroot`.

---

## IIS 4.0 - Windows NT 4.0 Option Pack ("K2", Dec 1997)  [RECOVERED]

Folder: `iis-4.0_nt4-optionpack/default.asp`

Unlike the 5.x `localstart`/`iisstart` ASP pair, IIS 4.0 shipped a real static default
document - a small **three-tab welcome site**, not a single splash:

```
/default.asp                     -> Welcome      (landing page)
/iissamples/default/LEARN.asp    -> Learn About
/iissamples/default/samples.asp  -> Samples      (the "Exploration Air" demo)
```

The Welcome tab reads "Welcome to Microsoft Windows NT 4.0 Option Pack..." over a
header band with two assets - `SQUIGGLE.GIF` (decorative) and `MSFT.GIF` (the logo) -
and footer links to microsoft.com/iis, /ntserver, and /ie. It even carries a feedback
address, `iiswish@microsoft.com`. The Samples tab pitches Exploration Air and warns you
need SQL Server 6.5 to run it. Legal line: "(c)1997 Microsoft Corporation."

The `.asp` extension is basically cosmetic here - the page is static HTML; ASP was just
the configured default document. The reconstruction in this archive has all prose, asset
names, and link targets verbatim from a live server; only the table/CSS skeleton is
approximate. (Still-live specimens at time of writing: ridethesteamtrain.com,
support.daggersec.com - misconfigured/abandoned NT4 hosts, which is why they survive.)

Assets to source from a real Option Pack install: `SQUIGGLE.GIF`, `MSFT.GIF` (both in
`\iissamples\default\`).

---

## IIS 3.0 - Windows NT 4.0 Service Pack 3 (1997)  [NOT RECOVERABLE]

The version that introduced **ASP** (classic ASP) and Microsoft's application-server
idea. It bolted onto an existing IIS 2.0 install via the SP / the "Active Server Pages"
add-on. The default web site was sample/placeholder content shipped in `wwwroot`; no
trustworthy public copy of that exact page survives. Don't trust anything claiming to be
"the IIS 3.0 default page" without a period capture behind it - I couldn't find one.

## IIS 2.0 - Windows NT 4.0 (1996)  [NOT RECOVERABLE]

First IIS to integrate properly with Windows: NT security accounts, an MMC-style admin
console, **HTTP Host headers** (multiple sites per IP), NCSA common log format and map
files, and content indexing via Index Server. Like 3.0, it dropped sample content into
the web root rather than a branded splash. Exact default-page markup: not recoverable.

## IIS 1.0 - Windows NT 3.51, free add-on / SP3 (1995-96)  [NOT RECOVERABLE]

The original. A bare set of services - HTTP, **Gopher**, and **WAIS** - with little OS
integration; most shops ran O'Reilly WebSite or Netscape's server instead. There was no
real "default page" design to speak of, just whatever sample/empty root it laid down.
Nothing to recreate.

---

## The full lineage at a glance

| IIS | Year | Ships with | Default page | In this archive? |
|-----|------|-----------|--------------|------------------|
| 1.0 | 1995-96 | NT 3.51 (add-on / SP3) | none / sample root | no - lost |
| 2.0 | 1996 | NT 4.0 | sample web root | no - lost |
| 3.0 | 1997 | NT 4.0 SP3 (adds ASP) | sample web root | no - lost |
| 4.0 | 1997 | NT 4.0 Option Pack | 3-tab Welcome site (`default.asp`) | **yes - recovered** |
| 5.0 | 2000 | Windows 2000 | `iisstart.asp` + `localstart.asp` (ASP) | yes |
| 5.1 | 2001 | Windows XP Pro | same ASP pair | yes |
| 6.0 | 2003 | Server 2003 | static "Under Construction" | yes (reconstructed) |
| 7.0 | 2008 | Vista / Server 2008 | `welcome.png` "IIS7" splash | yes |
| 7.5 | 2009 | Win 7 / Server 2008 R2 | identical to 7.0 | yes |
| 8.0 | 2012 | Win 8 / Server 2012 | microsoft.com/web composited | yes |
| 8.5 | 2013 | Win 8.1 / Server 2012 R2 | single image on #0072C6 | yes |
| 10.0| 2016+| Win 10 / Server 2016+ | single image on #0072C6 | yes |

That's the whole arc: empty roots (1.0) -> sample sites (2.0/3.0) -> a branded welcome
(4.0) -> conditional ASP that knew if you were local (5.x) -> back to dead-simple static
(6.0 onward). IIS 9 was skipped - Microsoft jumped 8.5 to 10 to line up with Windows 10.
