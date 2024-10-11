export async function GET() {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://lexi-nu.vercel.app/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://lexi-nu.vercel.app/about</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://lexi-nu.vercel.app/services</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://lexi-nu.vercel.app/solutions</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://lexi-nu.vercel.app/contact</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://lexi-nu.vercel.app/collaborations</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>https://lexi-nu.vercel.app/error</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>https://lexi-nu.vercel.app/cookies</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url><url>
        <loc>https://lexi-nu.vercel.app/terms</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>https://lexi-nu.vercel.app/ourTeam</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
