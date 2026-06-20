# Spring Boot - Whitelabel Error Page

The "Whitelabel Error Page / This application has no explicit mapping for /error..." that
Spring Boot serves when an error has no view. `whitelabel.html` is that page rendered for
a 404.

## Provenance

Spring Boot builds this in Java, in the `StaticView` of `ErrorMvcAutoConfiguration` (here
pinned to v3.5.0):
<https://github.com/spring-projects/spring-boot/blob/v3.5.0/spring-boot-project/spring-boot-autoconfigure/src/main/java/org/springframework/boot/autoconfigure/web/servlet/error/ErrorMvcAutoConfiguration.java>.

The exact builder:

```java
builder.append("<html><body><h1>Whitelabel Error Page</h1>")
    .append("<p>This application has no explicit mapping for /error, so you are seeing this as a fallback.</p>")
    .append("<div id='created'>").append(timestamp).append("</div>")
    .append("<div>There was an unexpected error (type=")
    .append(htmlEscape(model.get("error"))).append(", status=")
    .append(htmlEscape(model.get("status"))).append(").</div>");
// ... optional message/trace divs ...
builder.append("</body></html>");
```

`whitelabel.html` is that output for a 404 (`type=Not Found, status=404`) with an example
timestamp; the optional message/trace `<div>`s are omitted (the default since Spring Boot
2.3 doesn't include them).

## Rights

Apache-2.0, (c) the original authors / Broadcom (Spring). "Spring" and "Spring Boot" are
trademarks - see the root `NOTICE.md`.
