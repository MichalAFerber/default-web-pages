# Apache Traffic Server - default error pages

The plain error pages Apache Traffic Server (ATS) generates from its "body factory"
templates. Two of the defaults are here:

| File | Shown when | Reads |
|------|-----------|-------|
| `default` | generic fallback | "Error - Could not process this request." |
| `connect#failed_connect` | ATS can't reach the origin | "Could Not Connect - Could not connect to the requested server host." |

## Provenance

Byte-exact from apache/trafficserver, `configs/body_factory/default/`:
<https://github.com/apache/trafficserver/tree/master/configs/body_factory/default>.

That folder holds the full set of `<scheme>#<situation>` templates (DNS failures, access
denied, and so on); these two are the most-seen.

## Rights

Apache-2.0, (c) the Apache Software Foundation. See the root `NOTICE.md`.
