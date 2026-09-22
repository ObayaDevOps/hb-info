import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Search, ArrowRight } from 'lucide-react'
import SEO from '@/components/SEO'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import StyledCard from '@/components/StyledCard'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import { getRecipeImage, getRecipes, recipeMatchesSearch } from '@/lib/recipes'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://humble-beeing.com'
const pill = {
  display: 'inline-flex', alignItems: 'center', padding: '8px 16px', borderRadius: '9999px',
  border: '2px solid #000819', fontFamily: 'var(--font-hanken)', fontWeight: 700,
}

export default function RecipesPage({ recipes }) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const selectedTag = typeof router.query.tag === 'string' ? router.query.tag : ''
  const tags = useMemo(() => {
    const unique = new Map()
    recipes.forEach((recipe) => (recipe.tags || []).forEach((tag) => {
      if (tag?.slug) unique.set(tag.slug, tag)
    }))
    return [...unique.values()].sort((a, b) => a.title.localeCompare(b.title))
  }, [recipes])
  const visible = useMemo(() => recipes.filter((recipe) =>
    (!selectedTag || (recipe.tags || []).some((tag) => tag?.slug === selectedTag)) &&
    recipeMatchesSearch(recipe, query)
  ), [recipes, selectedTag, query])
  const activeTag = tags.find((tag) => tag.slug === selectedTag)

  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'ItemList', name: 'Humble Beeing recipes',
      itemListElement: recipes.map((recipe, i) => ({
        '@type': 'ListItem', position: i + 1, name: recipe.title,
        url: `${siteUrl}/recipes/${recipe.slug}`,
      })),
    },
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Recipes', path: '/recipes' }]),
  ]

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh' }}>
      <SEO title="Recipes" description="Cook with Humble Beeing honey. Browse quick salads, savoury dishes, and sweet ideas by ingredient or tag." canonical={`${siteUrl}/recipes`} jsonLd={jsonLd} />
      <HeroSection title="Recipes from the hive" subtitle="Simple, flavourful ways to cook with our Ugandan honey." bgImage="/images/recipes/spicy-peanut-cucumber-salad.webp" overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy" style={{ maxWidth: '72rem', margin: '0 auto', '--px': '24px', '--px-md': '48px', '--py': '48px', '--py-md': '80px' }}>
        <h2 className="rt" style={{ '--fs': '1.875rem', '--fs-md': '2.5rem', fontFamily: 'var(--font-hanken)', fontWeight: 700 }}>All recipes</h2>
        <p style={{ marginTop: '12px', maxWidth: '42rem', fontSize: '1.125rem' }}>Search by recipe, ingredient, or honey. Choose a tag to explore more of what you love.</p>

        <div style={{ marginTop: '32px', maxWidth: '32rem', position: 'relative' }}>
          <Search size={20} aria-hidden style={{ position: 'absolute', top: '14px', left: '18px' }} />
          <input
            type="search"
            aria-label="Search recipes"
            placeholder="Search recipes or ingredients…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            style={{ width: '100%', backgroundColor: '#fff7e1', border: '2px solid #000819', borderRadius: '9999px', padding: '12px 20px 12px 48px' }}
          />
        </div>

        <nav aria-label="Recipe tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px' }}>
          <Link href="/recipes" aria-current={!selectedTag ? 'page' : undefined} style={{ ...pill, backgroundColor: !selectedTag ? '#000819' : '#fff7e1', color: !selectedTag ? '#f5cb81' : '#000819' }}>All recipes</Link>
          {tags.map((tag) => (
            <Link key={tag.slug} href={`/recipes?tag=${encodeURIComponent(tag.slug)}`} aria-current={selectedTag === tag.slug ? 'page' : undefined} style={{ ...pill, backgroundColor: selectedTag === tag.slug ? '#000819' : '#fff7e1', color: selectedTag === tag.slug ? '#f5cb81' : '#000819' }}>
              {tag.title}
            </Link>
          ))}
        </nav>

        <p role="status" style={{ marginTop: '32px', fontFamily: 'var(--font-hanken)', fontWeight: 600 }}>
          {visible.length} {visible.length === 1 ? 'recipe' : 'recipes'}{activeTag ? ` tagged ${activeTag.title}` : ''}
        </p>
        {visible.length ? (
          <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-sm': 'repeat(2, 1fr)', '--gtc-lg': 'repeat(3, 1fr)', gap: '24px', marginTop: '20px' }}>
            {visible.map((recipe) => {
              const image = getRecipeImage(recipe)
              return (
                <StyledCard key={recipe._id} style={{ margin: 0 }}>
                  <Link href={`/recipes/${recipe.slug}`} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {image ? <img src={image.src} alt={image.alt} className="catalog-card__image" /> : <div className="catalog-card__image" style={{ backgroundColor: '#f5cb81' }} />}
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '12px', padding: '20px' }}>
                      <span style={{ color: '#8a5420', fontWeight: 700, fontSize: '0.875rem' }}>{recipe.totalMinutes} min · {recipe.servings} servings</span>
                      <h3 style={{ fontSize: '1.5rem', lineHeight: 1.25, fontWeight: 700 }}>{recipe.title}</h3>
                      <p style={{ lineHeight: 1.5, flex: 1 }}>{recipe.summary}</p>
                      <span className="catalog-card__button">View recipe <ArrowRight size={18} aria-hidden /></span>
                    </div>
                  </Link>
                </StyledCard>
              )
            })}
          </div>
        ) : (
          <div style={{ marginTop: '20px', padding: '32px', border: '2px solid #000819', borderRadius: '1.5rem', backgroundColor: '#fff7e1' }}>
            <h3 style={{ fontFamily: 'var(--font-hanken)', fontSize: '1.25rem', fontWeight: 700 }}>No recipes found</h3>
            <p style={{ marginTop: '8px' }}>Try another ingredient or choose All recipes.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let recipes = []
  try { recipes = await getRecipes() || [] } catch (error) { console.error('Could not load recipes', error) }
  return { props: { recipes }, revalidate: 60 }
}

RecipesPage.getLayout = (page) => <PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>
