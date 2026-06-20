<%@ Language="VBScript" %>
<%
' ===================================================================
' default.asp  -  IIS 4.0  (Windows NT 4.0 Option Pack, "K2", Dec 1997)
'
' This is the "Welcome" tab of the IIS 4.0 default web site. Unlike the
' 5.x localstart pair, IIS 4.0 shipped a real, static default document
' (a 3-tab mini-site). There is no meaningful server-side logic; the
' .asp extension was just the configured default doc.
'
' VERBATIM: all visible prose, the asset names (SQUIGGLE.GIF, MSFT.GIF),
' every link target, and the iiswish@microsoft.com feedback address -
' all lifted from a live, un-migrated IIS 4.0 server.
' RECONSTRUCTED: the table/style skeleton (period-accurate, approximate).
'
' Companion tabs on the same site:
'   /default.asp                        -> Welcome   (this file)
'   /iissamples/default/LEARN.asp       -> Learn About
'   /iissamples/default/samples.asp     -> Samples   (Exploration Air)
' ===================================================================
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>Welcome To IIS 4.0!</title>
<style type="text/css">
body { font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #000000; background: #FFFFFF; margin: 0; }
td   { font-family: Arial, Helvetica, sans-serif; font-size: 12px; }
.nav a { font-weight: bold; color: #000000; text-decoration: none; padding: 0 12px; }
.title { font-size: 14px; font-weight: bold; }
.legal { font-size: 10px; color: #666666; }
a { color: #0000CC; }
</style>
</head>
<body>

<!-- header band: decorative squiggle + Microsoft logo -->
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td><img src="iissamples/default/SQUIGGLE.GIF" alt="" border="0"></td>
<td align="right"><img src="iissamples/default/MSFT.GIF" alt="Microsoft" border="0"></td>
</tr>
</table>

<!-- tab nav -->
<table width="100%" cellpadding="6" cellspacing="0" border="0">
<tr class="nav">
<td>
<a href="default.asp">Welcome</a>
<a href="iissamples/default/LEARN.asp">Learn About</a>
<a href="iissamples/default/samples.asp">Samples</a>
</td>
</tr>
</table>

<!-- body -->
<table width="100%" cellpadding="12" cellspacing="0" border="0">
<tr>
<td>
<p class="title">Welcome to Microsoft&reg; Windows NT&reg; 4.0 Option Pack</p>
<p>Microsoft Windows NT 4.0 Option Pack provides enhanced Web, application, and
communication services for Windows NT Server 4.0. So if you're setting up a simple
Web site on your corporate intranet, creating large sites for the Internet, or
developing component-based applications, the Windows NT 4.0 Option Pack provides a
simple, flexible way to make your existing Windows NT Server 4.0 an even stronger Web
and applications platform.</p>
<p>We welcome your feedback! It's important that we incorporate your feedback into our
software. Please send any comments or suggestions to
<a href="mailto:iiswish@microsoft.com">iiswish@microsoft.com</a>.</p>
</td>
</tr>
</table>

<!-- footer links -->
<table width="100%" cellpadding="8" cellspacing="0" border="0">
<tr>
<td>
<a href="http://www.microsoft.com/iis">Internet Information Server</a>&nbsp;&nbsp;
<a href="http://www.microsoft.com/ntserver/">Windows NT Server</a>
</td>
</tr>
<tr>
<td>
<a href="http://www.microsoft.com/ie">Download Internet Explorer!</a>&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="http://www.microsoft.com/iis">Learn more about Windows NT 4.0 Option Pack!</a>
</td>
</tr>
<tr>
<td class="legal">&copy;1997 Microsoft Corporation. All rights reserved.
<a href="http://www.microsoft.com/misc/cpyright.htm">Legal Notices.</a></td>
</tr>
</table>

</body>
</html>