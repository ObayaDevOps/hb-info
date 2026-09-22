import Link from 'next/link'
import SEO from '@/components/SEO'
import PageLayout from '@/components/layouts/PageLayout'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import { getProduct } from '@/lib/products'
import { getRecipe, getRecipeImage, getRecipeSlugs } from '@/lib/recipes'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://humble-beeing.com'

export default function RecipePage({ recipe }) {
  const image = getRecipeImage(recipe)
  const product = getProduct(recipe.relatedProductSlug)
  const recipePath = `/recipes/${recipe.slug}`
  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'Recipe', name: recipe.title,
      description: recipe.summary, url: `${siteUrl}${recipePath}`,
      ...(image ? { image: [image.src.startsWith('http') ? image.src : `${siteUrl}${image.src}`] } : {}),
      author: { '@type': 'Organization', name: 'Humble Beeing' },
      prepTime: `PT${recipe.prepMinutes}M`, totalTime: `PT${recipe.totalMinutes}M`,
      recipeYield: `${recipe.servings} servings`,
      recipeIngredient: (recipe.ingredientGroups || []).flatMap((group) => group.items || []),
      recipeInstructions: (recipe.steps || []).map((step) => ({ '@type': 'HowToStep', text: step })),
      keywords: (recipe.tags || []).map((tag) => tag?.title).filter(Boolean).join(', '),
    },
    breadcrumbJsonLd([
      { name: 'Home', path: '/' }, { name: 'Recipes', path: '/recipes' },
      { name: recipe.title, path: recipePath },
    ]),
  ]

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh' }}>
      <SEO title={recipe.title} description={recipe.summary} canonical={`${siteUrl}${recipePath}`} openGraph={image ? { image: image.src.startsWith('http') ? image.src : `${siteUrl}${image.src}` } : {}} jsonLd={jsonLd} />
      <article className="rpx rpy" style={{ maxWidth: '72rem', margin: '0 auto', '--px': '24px', '--px-md': '48px', '--py': '32px', '--py-md': '64px' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: '32px' }}>
          <Link href="/recipes" style={{ color: '#8a5420', fontWeight: 700 }}>← All recipes</Link>
        </nav>
        <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': '1.1fr 1fr', gap: '40px', alignItems: 'center' }}>
          {image ? (
            <figure>
              <img src={image.src} alt={image.alt} style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: '1.5rem', border: '2px solid #000819' }} />
              {image.credit && <figcaption style={{ marginTop: '8px', fontSize: '0.8125rem', color: '#8a5420' }}>Photo: <a href={image.creditUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>{image.credit}</a></figcaption>}
            </figure>
          ) : <div style={{ aspectRatio: '4 / 3', borderRadius: '1.5rem', backgroundColor: '#f5cb81' }} />}
          <div>
            <h1 className="rt" style={{ '--fs': '2.25rem', '--lh': '1.2', '--fs-md': '3.5rem', fontFamily: 'var(--font-hanken)', fontWeight: 700, marginTop: '12px' }}>{recipe.title}</h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, marginTop: '20px' }}>{recipe.summary}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px' }}>
              {(recipe.tags || []).filter((tag) => tag?.slug).map((tag) => (
                <Link key={tag.slug} href={`/recipes?tag=${encodeURIComponent(tag.slug)}`} style={{ padding: '7px 14px', borderRadius: '9999px', backgroundColor: '#f5cb81', border: '2px solid #000819', fontFamily: 'var(--font-hanken)', fontWeight: 700 }}>{tag.title}</Link>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '28px', fontFamily: 'var(--font-hanken)' }}>
              <span><strong>Prep</strong> {recipe.prepMinutes} min</span>
              <span><strong>Total</strong> {recipe.totalMinutes} min</span>
              <span><strong>Serves</strong> {recipe.servings}</span>
            </div>
          </div>
        </div>

        <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'minmax(0, 2fr) minmax(0, 3fr)', gap: '32px', marginTop: '64px', alignItems: 'start' }}>
          <section style={{ backgroundColor: '#fff7e1', border: '2px solid #000819', borderRadius: '1.5rem', padding: '28px' }}>
            <h2 style={{ fontFamily: 'var(--font-hanken)', fontSize: '1.75rem', fontWeight: 700 }}>Ingredients</h2>
            {(recipe.ingredientGroups || []).map((group, index) => (
              <div key={group._key || index} style={{ marginTop: '24px' }}>
                {group.heading && <h3 style={{ fontFamily: 'var(--font-hanken)', fontSize: '1.125rem', fontWeight: 700 }}>{group.heading}</h3>}
                <ul style={{ listStyle: 'disc', paddingLeft: '22px', marginTop: '12px', display: 'grid', gap: '12px', lineHeight: 1.5 }}>
                  {(group.items || []).map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                </ul>
              </div>
            ))}
          </section>
          <section style={{ padding: '28px 0' }}>
            <h2 style={{ fontFamily: 'var(--font-hanken)', fontSize: '1.75rem', fontWeight: 700 }}>Method</h2>
            <ol style={{ display: 'grid', gap: '24px', marginTop: '24px' }}>
              {(recipe.steps || []).map((step, index) => (
                <li key={index} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: '16px', alignItems: 'start', lineHeight: 1.6 }}>
                  <span aria-hidden style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#000819', color: '#f5cb81', display: 'grid', placeItems: 'center', fontWeight: 700 }}>{index + 1}</span>
                  <span style={{ paddingTop: '7px' }}>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {product && (
          <aside style={{ backgroundColor: '#000819', color: '#FFF2D7', borderRadius: '1.5rem', padding: '32px', marginTop: '48px' }}>
            <h2 style={{ fontFamily: 'var(--font-hanken)', fontSize: '1.5rem', fontWeight: 700 }}>The honey behind this recipe</h2>
            <p style={{ marginTop: '10px', maxWidth: '42rem' }}>{product.tagline}</p>
            <Link href={`/products/${product.slug}`} style={{ display: 'inline-flex', marginTop: '20px', padding: '10px 20px', borderRadius: '9999px', backgroundColor: '#f5cb81', color: '#000819', fontWeight: 700 }}>Explore {product.name} →</Link>
          </aside>
        )}
        {recipe.sourceUrl && <p style={{ marginTop: '32px', fontSize: '0.875rem' }}>Inspired by <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#8a5420', fontWeight: 700, textDecoration: 'underline' }}>{recipe.sourceName || 'this recipe'}</a>.</p>}
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  let slugs = []
  try { slugs = await getRecipeSlugs() || [] } catch (error) { console.error('Could not load recipe paths', error) }
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  try {
    const recipe = await getRecipe(params.slug)
    if (!recipe) return { notFound: true, revalidate: 60 }
    return { props: { recipe }, revalidate: 60 }
  } catch (error) {
    console.error('Could not load recipe', error)
    return { notFound: true, revalidate: 60 }
  }
}

RecipePage.getLayout = (page) => <PageLayout>{page}</PageLayout>
