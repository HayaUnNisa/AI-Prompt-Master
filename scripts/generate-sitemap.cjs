const fs = require('fs');
const path = require('path');

const baseUrl = 'https://aicadmia.com';

const staticRoutes = [
  '/',
  '/courses',
  '/my-learning',
  '/prompt-library',
  '/resources',
  '/ebooks',
  '/blog',
  '/about',
  '/contact',
  '/faq',
  '/privacy-policy',
  '/terms',
  '/sign-in',
  '/sign-up',
];

function extractSlugs(filePath) {
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf-8');

  const slugMatches = [...content.matchAll(/slug:\s*['"`](.*?)['"`]/g)];

  return slugMatches.map((match) => match[1]);
}

// Adjust these paths based on your structure
const blogSlugs = extractSlugs(
  path.join(__dirname, '..', 'src', 'data', 'blogs.ts')
);

const resourceSlugs = extractSlugs(
  path.join(__dirname, '..', 'src', 'data', 'resources.ts')
);

const courseSlugs = extractSlugs(
  path.join(__dirname, '..', 'src', 'data', 'courses.ts')
);

const dynamicRoutes = [
  ...blogSlugs.map((slug) => `/blog/${slug}`),
  ...resourceSlugs.map((slug) => `/resources/${slug}`),
  ...courseSlugs.map((slug) => `/courses/${slug}`),
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);

console.log('Sitemap generated successfully!');