import Link from 'next/link';
import SEO from '@/components/SEO';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';

const stories = [
  {
    number: '01',
    title: 'More opportunity for beekeepers',
    body: 'We work with smallholder beekeepers on practical training, careful harvesting, and access to a dependable market for their honey.',
    image: '/images/our-process/harvest-collection.jpg',
    alt: 'Beekeeper holding a freshly harvested honeycomb',
  },
  {
    number: '02',
    title: 'Landscapes worth protecting',
    body: 'Healthy bees depend on healthy habitats. Our approach connects beekeeping with care for native trees, including shea, and the places where pollinators forage.',
    image: '/images/our-process/beeswax.jpg',
    alt: 'Honeybee colony building a comb in a tree',
  },
  {
    number: '03',
    title: 'Care from hive to jar',
    body: 'Direct sourcing, thoughtful handling, and batch-level quality checks help us make honey people can trust and value.',
    image: '/images/our-process/pouring-honey.jpg',
    alt: 'Raw honey being poured during careful processing',
  },
];

const goals = [
  {
    number: '01',
    name: 'No Poverty',
    image: '/images/sdgs/goal-01.png',
    contribution: 'Build more reliable earning opportunities through beekeeper training and market access.',
  },
  {
    number: '05',
    name: 'Gender Equality',
    image: '/images/sdgs/goal-05.png',
    contribution: 'Make training and participation in the honey value chain more accessible to women.',
  },
  {
    number: '08',
    name: 'Decent Work and Economic Growth',
    image: '/images/sdgs/goal-08.png',
    contribution: 'Support local livelihoods and fairer, more dependable routes to market.',
  },
  {
    number: '12',
    name: 'Responsible Consumption and Production',
    image: '/images/sdgs/goal-12.png',
    contribution: 'Prioritize traceable sourcing, careful processing, and responsible use of hive products.',
  },
  {
    number: '13',
    name: 'Climate Action',
    image: '/images/sdgs/goal-13.png',
    contribution: 'Encourage land stewardship and more resilient beekeeping practices as conditions change.',
  },
  {
    number: '15',
    name: 'Life on Land',
    image: '/images/sdgs/goal-15.png',
    contribution: 'Value native trees and pollinator habitat alongside honey production.',
  },
];

const measures = [
  ['Beekeeper partnerships', 'Farmers reached through training and market access.'],
  ['Women’s participation', 'Representation in training and sourcing partnerships.'],
  ['Land stewardship', 'Native trees and pollinator habitats supported.'],
  ['Product traceability', 'Batches with reliable sourcing and quality records.'],
];

export default function ImpactPage() {
  return (
    <div className="impact-page">
      <SEO
        title="Impact & Sustainability: People, Bees and Land in Uganda"
        description="Explore Humble Beeing’s approach to beekeeper livelihoods, women’s participation, traceable honey and pollinator habitats, aligned with six UN Sustainable Development Goals."
        openGraph={{ image: 'https://cdn.sanity.io/images/wf5e366r/production/e21c432bb95edcad8c48491cf4f76ce70f31a0a0-1154x1200.png' }}
      />

      <HeroSection
        title="Impact & Sustainability"
        subtitle="Better opportunities for people. More care for bees and the land."
        bgImage="https://cdn.sanity.io/images/wf5e366r/production/e21c432bb95edcad8c48491cf4f76ce70f31a0a0-1154x1200.png"
        overlay
        py={{ base: 16, md: 24 }}
      >
        <p>Our work starts with the beekeepers and landscapes behind every harvest.</p>
      </HeroSection>

      <div>
        <section className="impact-intro impact-container" aria-labelledby="impact-intro-title">
          <div>
            <span className="impact-eyebrow">Our approach</span>
            <h2 id="impact-intro-title">Good honey begins with thriving communities.</h2>
          </div>
          <p>
            We want the value of Ugandan honey to reach the people who produce it and to
            support the landscapes bees need. That means working with beekeepers, widening
            opportunities for women, and treating quality and stewardship as part of the
            same story.
          </p>
        </section>

        <section className="impact-target impact-container" aria-label="Farmer partnership target">
          <div>
            <span className="impact-eyebrow">Our target</span>
            <p className="impact-target__number">2,000</p>
          </div>
          <p>
            farmers supported with beekeeping knowledge and access to a fairer, more
            dependable market. This is the goal we are working toward.
          </p>
        </section>

        <section className="impact-section impact-container" aria-labelledby="impact-work-title">
          <div className="impact-section-heading">
            <span className="impact-eyebrow">From the field</span>
            <h2 id="impact-work-title">How we put that purpose to work</h2>
            <p>Three connected parts of the way we source and make our honey.</p>
          </div>
          <div className="impact-story-grid">
            {stories.map((story) => (
              <article className="impact-story" key={story.number}>
                <img src={story.image} alt={story.alt} loading="lazy" />
                <div className="impact-story__copy">
                  <span className="impact-story__number">{story.number}</span>
                  <h3>{story.title}</h3>
                  <p>{story.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="impact-sdg-section" aria-labelledby="impact-sdg-title">
          <div className="impact-container">
            <div className="impact-section-heading">
              <span className="impact-eyebrow">A shared framework</span>
              <h2 id="impact-sdg-title">Our work and the UN Sustainable Development Goals</h2>
              <p>
                These six goals help describe the outcomes we aim to contribute to. Our
                alignment is a statement of intent, not a claim of UN endorsement or
                measured progress toward the global goals.
              </p>
            </div>
            <div className="impact-sdg-grid">
              {goals.map((goal) => (
                <article className="impact-sdg-card" key={goal.number}>
                  <img src={goal.image} alt={`UN Sustainable Development Goal ${Number(goal.number)}: ${goal.name}`} loading="lazy" />
                  <div>
                    <h3>{goal.name}</h3>
                    <p>{goal.contribution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-section impact-container" aria-labelledby="impact-measure-title">
          <div className="impact-section-heading">
            <span className="impact-eyebrow">Accountability</span>
            <h2 id="impact-measure-title">What we intend to measure</h2>
            <p>We will share results when they have been verified. These are the areas we plan to track.</p>
          </div>
          <div className="impact-measure-list">
            {measures.map(([title, description], index) => (
              <div className="impact-measure" key={title}>
                <span className="impact-measure__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-cta impact-container" aria-labelledby="impact-cta-title">
          <div>
            <span className="impact-eyebrow">Work with us</span>
            <h2 id="impact-cta-title">Let’s make the next harvest count.</h2>
            <p>Interested in a sourcing partnership or in supporting our beekeeping work?</p>
          </div>
          <div className="impact-cta__links">
            <Link className="impact-button impact-button--amber btn-amber" href="/wholesale-and-partnerships">Explore partnerships</Link>
            <Link className="impact-button impact-button--outline" href="/contact-and-connect">Get in touch</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

ImpactPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
);
