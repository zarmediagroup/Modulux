# MODULUX Launch Checklist

## Pre-build (before go-live)

- [x] Keyword research completed → `docs/seo/keyword-research.md`
- [x] Keyword-to-URL map → `docs/seo/keyword-map.csv`
- [x] Sitemap + robots.txt configured
- [x] JSON-LD structured data (Organization, LocalBusiness, Article, Product)
- [x] 4 SEO blog posts published
- [x] Homepage below-fold sections lazy-loaded for speed
- [x] Image formats AVIF/WebP enabled in Next.js
- [ ] Replace placeholder phone number (+27 21 000 0000)
- [ ] Replace Unsplash images with real MODULUX photography
- [ ] Fix broken footer links (`/privacy`, `/terms`, `/brochure`, etc.)
- [ ] Connect contact forms to email/CRM
- [ ] Lighthouse audit: target 90+ Performance on mobile

---

## Launch day

### DNS & hosting
- [ ] DNS pointed to Vercel (A record + www CNAME)
- [ ] SSL certificate active (automatic on Vercel)
- [ ] Verify `https://modulux.co.za` loads production deployment
- [ ] Verify `www.modulux.co.za` redirects to apex (or vice versa — pick one canonical)

### Google Search Console — request indexing

1. **Add property:** [Google Search Console](https://search.google.com/search-console) → Add property → `https://modulux.co.za`
2. **Verify ownership:** DNS TXT record (recommended) or HTML tag via Vercel
3. **Submit sitemap:** Sitemaps → enter `https://modulux.co.za/sitemap.xml` → Submit
4. **Request indexing for key pages** (URL Inspection → Request Indexing):

| Priority | URL |
|----------|-----|
| P0 | `https://modulux.co.za/` |
| P0 | `https://modulux.co.za/designs` |
| P0 | `https://modulux.co.za/commercial` |
| P0 | `https://modulux.co.za/display-village` |
| P1 | `https://modulux.co.za/about` |
| P1 | `https://modulux.co.za/contact` |
| P1 | `https://modulux.co.za/designs/the-stellenbosch` |
| P1 | `https://modulux.co.za/designs/the-karoo` |
| P1 | `https://modulux.co.za/blog` |
| P1 | All 4 blog post URLs |

5. **Bing Webmaster Tools:** Submit same sitemap at [bing.com/webmasters](https://www.bing.com/webmasters)

### Google Business Profile
- [ ] Create/claim listing: "MODULUX" at 12 Modular Way, Bellville
- [ ] Add website URL, photos, hours, services
- [ ] Link to Display Village page

---

## Post-launch: first 10 backlinks

Build these within 30 days of launch. Track in a spreadsheet: URL, anchor text, date live, follow/nofollow.

### Directories (5)

| # | Platform | Action | Anchor text suggestion |
|---|----------|--------|------------------------|
| 1 | **Google Business Profile** | Complete profile + website link | MODULUX |
| 2 | **Bing Places** | Add business listing | modular homes Cape Town |
| 3 | **SA Venues / local business directories** | List under "Home Builders" Western Cape | MODULUX modular homes |
| 4 | **Houzz South Africa** | Create pro profile + project photos | modular home builder Cape Town |
| 5 | **Yellow Pages SA / Brabys** | Business listing with website | MODULUX |

### Client & partner sites (3)

| # | Source | Action | Anchor text suggestion |
|---|--------|--------|------------------------|
| 6 | **Zarmediagroup.com** | Partner/client logo + link on portfolio or partners page | MODULUX modular homes |
| 7 | **Completed client sites** | Ask 2 past clients for a testimonial page link back | our modular home builder |
| 8 | **Supplier/partner site** | Co-marketing page (e.g. finance partner, land developer) | MODULUX Display Village |

### Content & PR (2)

| # | Source | Action | Anchor text suggestion |
|---|--------|--------|------------------------|
| 9 | **Guest post / local property blog** | Publish excerpt of blog post 1 with link | modular vs traditional build cost |
| 10 | **LinkedIn company page + Facebook page** | About section website link + first post linking to `/display-village` | visit our showroom |

---

## Post-launch: ongoing SEO (month 1)

- [ ] Monitor GSC → Performance for impressions on target keywords
- [ ] Fix any Coverage errors in GSC within 48 hours
- [ ] Run PageSpeed Insights weekly; keep mobile Performance ≥ 90
- [ ] Publish 1–2 new blog posts per month (see keyword research for topics)
- [ ] Build 2–3 additional backlinks per month
- [ ] Collect and add Google reviews (link from thank-you email)

---

## Speed targets (obsessive)

| Metric | Target |
|--------|--------|
| Lighthouse Performance (mobile) | ≥ 90 |
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| TTFB | < 800ms |

**Already implemented:** AVIF/WebP images, lazy-loaded homepage sections, `display: swap` fonts, hero `priority` image, package import optimization.

**Still needed for 95+:** Self-host images (remove Unsplash), reduce Framer Motion on above-fold content, map iframe click-to-load facade.
