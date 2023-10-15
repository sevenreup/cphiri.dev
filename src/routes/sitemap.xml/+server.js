export async function GET() {
	return new Response(
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.cphiri.dev</loc>
        </url>
        <url>
          <loc>https://www.cphiri.dev/resume</loc>
        </url>
    </urlset>`.trim(),
		{ headers: { 'Content-Type': 'application/xml' } }
	);
}
