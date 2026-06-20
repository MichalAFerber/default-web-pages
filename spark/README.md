# Spark - default "404 Not found" page

The default 404 the Spark micro-framework (Java) serves:
`<html><body><h2>404 Not found</h2></body></html>` (48 bytes, no trailing newline).
`not-found.html` holds it exactly.

## Provenance

Byte-exact from perwendel/spark: the `CustomErrorPages.NOT_FOUND` constant, returned by
`MatcherFilter` when no route matches:
<https://github.com/perwendel/spark/blob/master/src/main/java/spark/CustomErrorPages.java>.

(Spark stands in here for Play and Ktor: Ktor's default 404 is an empty body, and Play's
default-page templates have moved around enough that there's no stable upstream path to cite.)

## Rights

Apache-2.0, (c) Per Wendel and the Spark contributors. See the root `NOTICE.md`.
