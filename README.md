# Code for my personal website

## Analytics

Google Analytics 4 uses measurement ID `G-79022KEJ81`. The tag loads asynchronously
from `src/app.html` on `cphiri.dev` and `www.cphiri.dev` only. Local development and
preview hosts do not load the tag or send events.

Page views use GA4 enhanced measurement, including SvelteKit client-side navigation.
In GA4 Admin > Data streams > Web > Enhanced measurement > Page views > Advanced
settings, keep **Page loads** and **Page changes based on browser history events**
enabled. Keep **File downloads** enabled to measure resume PDF downloads. Do not
add manual `page_view` events while automatic history measurement is enabled,
because that can double-count navigation.

To verify a deployment, use Google Tag Assistant and GA4 DebugView. Check a direct
page load, navigation between Work, Resume, and Blog, browser back/forward, and a
resume download. Expect one `page_view` per page navigation with the correct URL
and a `file_download` for the PDF. Confirm the events arrive in the intended GA4
property; seeing outbound requests alone does not verify reporting access or filters.
