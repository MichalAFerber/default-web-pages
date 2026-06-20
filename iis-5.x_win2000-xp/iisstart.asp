<%@ Language = "VBScript" %>
<% Response.Buffer = true %>

<%

' ===================================================================
' iisstart.asp  -  IIS 5.0 (Win 2000) / IIS 5.1 (Win XP Pro)
' The ASP block below is VERBATIM from a live IIS 5.1 server.
' It is the default document: local visitors are bounced to the rich
' localstart.asp welcome page; everyone else falls through to the
' static "Under Construction" message. uc=1 forces the message.
' ===================================================================

Dim strServername, strLocalname, strServerIP

strServername = LCase(Request.ServerVariables("SERVER_NAME")) ' Server's name
strServerIP = LCase(Request.ServerVariables("LOCAL_ADDR")) ' Server's IP address
strRemoteIP = LCase(Request.ServerVariables("REMOTE_ADDR")) ' Client's IP address

' If the querystring variable uc <> 1, and the user is browsing from the server machine,
' go ahead and show them localstart.asp. We don't want localstart.asp shown to outside users.

If Request("uc") <> 1 And (strServername = "localhost" Or strServerIP = strRemoteIP) Then
	Response.Redirect "localstart.asp"
Else

%>

<!-- ============================================================= -->
<!-- Below: RECONSTRUCTED period HTML. The visible "Under          -->
<!-- Construction" copy is verbatim; pagerror.gif is the genuine   -->
<!-- asset name. The table/style skeleton is approximate.          -->
<!-- ============================================================= -->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<title>Under Construction</title>
<style type="text/css">
body { font: 70% Verdana, Arial, Helvetica, sans-serif; color: #000000; background: #FFFFFF; margin: 40px; }
h1 { font-size: 130%; }
td { font: 70% Verdana, Arial, Helvetica, sans-serif; vertical-align: top; }
</style>
</head>
<body>
<table cellpadding="10" cellspacing="0" border="0">
<tr>
<td><img src="pagerror.gif" width="36" height="48" alt=""></td>
<td>
<h1>Under Construction</h1>
<p>The site you were trying to reach does not currently have a default page. It
may be in the process of being upgraded and configured.</p>
<hr>
<p>Please try this site again later. If you still experience the problem, try
contacting the Web site administrator.</p>
</td>
</tr>
</table>
</body>
</html>

<%

End If

%>