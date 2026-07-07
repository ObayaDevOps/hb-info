# Humble Beeing — SEO & GEO Keyword Reference

Last updated: July 2026 (implemented on the `unChakra` branch).

This document lists the search terms the site is currently optimised for, where each term lives, and the rules for keeping optimisation natural. GEO = Generative Engine Optimisation (appearing in AI search answers: Google AI Overviews, ChatGPT, Perplexity).

---

## Golden rules

1. **One primary keyword per page**, plus 2–3 secondary. The primary appears in: title tag, meta description, H1, first paragraph, one image alt, and the URL where possible.
2. **Use "pure" AND "raw"** wherever honey quality is described — Ugandan buyers search *"pure honey"* more often than *"raw honey"*.
3. **Alt text describes the actual image first**; the keyword only appears where it is true. Never two keywords stuffed into one alt.
4. **FAQ answers lead with a direct 2–3 sentence answer** — AI engines quote these verbatim.

---

## Keyword themes

### 1. Honey — core transactional
| Term | Where it lives |
|---|---|
| best honey Uganda / best honey in Kampala | Blog: buyers guide 2025; Our Story |
| pure honey Uganda / pure natural honey | Homepage title + hero, Lab Tests, sitewide copy |
| raw honey Uganda | Homepage, Our Process, blog: raw honey guide |
| buy honey online Kampala / honey delivery Kampala | Contact page, blog: where to buy in Kampala |
| lab-tested honey / UNBS certified honey | Lab Tests page, badge alt text, llms.txt |
| unprocessed / cold-pressed / wild honey | Our Process copy |

### 2. Honey — origin & varietal (our differentiator)
| Term | Where it lives |
|---|---|
| single-origin honey Uganda | Homepage product carousel, blog: single-origin explainer |
| West Nile honey / shea blossom honey / shea honey Uganda | Blog: single-origin explainer; product alts |
| coffee blossom / pine honey | Blog: single-origin explainer; product descriptions |
| infused honey Uganda (orange peel, lemon, rosemary, vanilla bean) | Homepage products, llms.txt |
| artisanal / gourmet honey Africa | Homepage, blog: premium honey |

### 3. Gifting & ceremonies (biggest untapped opportunity)
| Term | Where it lives |
|---|---|
| kwanjula gifts Uganda / kukyala gifts / introduction ceremony gifts | **Blog: kwanjula & kukyala gift guide** (no competing honey brand ranks here) |
| wedding gifts Uganda / kuhingira gifts | Same article |
| luxury gifts Uganda / Ugandan gifts / luxury gift hampers Kampala | Homepage gift sets, blog: Ugandan gift ideas |
| corporate gifts Kampala / branded gift sets Uganda | Wholesale page |
| made-in-Uganda gifts / Uganda souvenirs | llms.txt, gift set copy |

### 4. Candles (near-empty local SERP — quick wins)
| Term | Where it lives |
|---|---|
| beeswax candles Uganda / pure beeswax candles | Blog: clean burn guide; homepage product + alt |
| best candles Kampala / hand-poured candles | Product alts, blog: clean burn guide |
| scented candles Uganda | Blog: fragrance guide |
| natural non-toxic candles / candles vs paraffin | Blog: clean burn guide |

### 5. Wholesale / B2B
| Term | Where it lives |
|---|---|
| wholesale honey Uganda / bulk honey supplier Kampala | Wholesale page (title + intro), blog: wholesale suppliers guide |
| honey supplier for hotels and restaurants | Wholesale page, blog: chefs guide |
| corporate gifting Uganda / NGO and donor gifts | Wholesale page |

### 6. Educational / long-tail (GEO fuel — questions AI engines answer)
| Question | Where it lives |
|---|---|
| Is crystallized honey fake? / real vs fake honey in Uganda | **Blog: real vs fake honey** (FAQ schema) |
| How to test if honey is pure | Same article + Lab Tests + blog: purity testing |
| What gifts to take for kwanjula? | Kwanjula article FAQ |
| What is shea blossom honey? / why is West Nile famous for honey? | Single-origin article FAQ |
| Benefits of beeswax candles | Candle articles FAQ |
| Where to buy raw honey in Kampala | Blog: where to buy |

---

## Page-by-page title map

| Page | Title tag | Primary keyword |
|---|---|---|
| `/` | Pure Raw Honey from Uganda — Luxury Gifts & Beeswax Candles | pure raw honey Uganda |
| `/our-story` | Our Story — A Ugandan Family Honey Brand in Kampala | Ugandan honey brand |
| `/our-process` | How We Harvest Pure Raw Honey in Uganda — Our Process | raw honey harvesting Uganda |
| `/impact-and-sustainability` | Impact & Sustainability — Ethical Beekeeping in Uganda | ethical beekeeping Uganda |
| `/wholesale-and-partnerships` | Wholesale & Bulk Honey Supplier in Kampala — Corporate Gifts | bulk honey supplier Kampala |
| `/lab-tests` | Lab-Tested Pure Honey — Batch Quality Certificates | lab-tested pure honey |
| `/contact-and-connect` | Contact Us — Honey Delivery in Kampala | honey delivery Kampala |
| `/blog` | Blog | (hub page) |

All titles auto-append `| Humble Beeing`.

---

## GEO measures in place

- **Entity statement** (one consistent definitional sentence) in the footer of every page, on Our Story, in the LocalBusiness schema, and in `public/llms.txt`:
  > "Humble Beeing is a Kampala-based Ugandan producer of pure raw honey, infused honeys, hand-poured beeswax candles, and luxury gift hampers…"
- **`public/llms.txt`** — brand summary, product list, and key page URLs for AI crawlers. Update when products or pages change.
- **Structured data**: `LocalBusiness/Store` sitewide (`src/pages/_app.js`), `Product` list on the homepage, `BlogPosting` + `FAQPage` + `BreadcrumbList` on every article.
- **robots.txt allows all crawlers** including GPTBot, ClaudeBot, PerplexityBot.
- **FAQ sections** on every blog article in question-heading / direct-answer format.

---

## Maintenance

- **New blog posts**: add the slug/title/snippet to `BLOG_POSTS` in `src/lib/siteMeta.js` — the blog index and sitemap update automatically. Follow the existing article pattern (SEO component, `BlogPosting` + `FAQPage` + breadcrumb JSON-LD, internal links).
- **Future content ideas** (researched gaps, still unwritten): ekyogero and honey (near-zero commercial coverage), Christmas/Eid hampers Kampala, honey price guide Uganda, Karamoja honey.
- **Production requirement**: `NEXT_PUBLIC_SITE_URL` must be set in the deployment environment or canonical URLs will not render.
- **After each deploy with new pages**: submit the sitemap in Google Search Console.
