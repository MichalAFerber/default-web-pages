# ASP.NET Core - default "Welcome" page

The home page a new ASP.NET Core Razor Pages app (`dotnet new webapp`) serves: a centered
"Welcome" above "Learn about building Web apps with ASP.NET Core." `Index.cshtml` is the
genuine template, captured byte-for-byte.

## Provenance

Byte-exact from dotnet/aspnetcore,
`src/ProjectTemplates/Web.ProjectTemplates/content/RazorPagesWeb-CSharp/Pages/Index.cshtml`:
<https://github.com/dotnet/aspnetcore/blob/main/src/ProjectTemplates/Web.ProjectTemplates/content/RazorPagesWeb-CSharp/Pages/Index.cshtml>.

Two quirks, both exactly as Microsoft ships the template: the file starts with a UTF-8 BOM,
and it ends with an `@*#if (GenerateApiOrGraph) … *@` block - a `dotnet new` templating
conditional that only materializes if you scaffold with the API/GraphQL option (the engine
adds/removes the closing markers), so a plain scaffold renders just the `Welcome` div. The
page also renders inside the shared `_Layout.cshtml` chrome, which is not vendored here. The
MVC template (`Views/Home/Index.cshtml`) ships the same Welcome text.

## Rights

MIT, (c) .NET Foundation and Contributors. "ASP.NET" / ".NET" are Microsoft trademarks - see
the root `NOTICE.md`.
