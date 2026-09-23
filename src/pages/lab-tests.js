import SEO from '@/components/SEO';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';

const hanken = 'var(--font-hanken)'

const labReports = [
  {
    title: 'UNBS chemistry test report',
    subtitle: 'Sample L/5087/2025MC · Report FA/2025/10664 · 3 October 2025',
    downloadUrl: 'https://cdn.sanity.io/files/wf5e366r/production/0beee6c148ffc7f7843e84ddbc820d1c7436c3e2.pdf',
    metrics: [
      { label: 'Moisture', value: '17%' },
      { label: 'HMF', value: '8 mg/kg' },
      { label: 'Acidity', value: '22 meq/kg' },
    ],
  },
  {
    title: 'UNBS microbiology test report',
    subtitle: 'Sample L/5087/2025MC · Report ML/2025/06446 · 2 October 2025',
    downloadUrl: 'https://cdn.sanity.io/files/wf5e366r/production/4caa04aabdd97d93eae66ca925a50c3c1916a700.pdf',
    metrics: [
      { label: 'Coliforms', value: '<10 cfu/g' },
      { label: 'Yeast and moulds', value: '<10 cfu/g' },
    ],
  },
];

export default function LabTestsPage() {
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: hanken }}>
      <SEO
        title="UNBS Honey Lab Test Reports"
        description="Read the UNBS chemistry and microbiology reports for a Humble Beeing raw honey sample tested in October 2025, including moisture, HMF, coliforms, and yeast and moulds."
      />

      <HeroSection
        title="Honey Lab Test Reports"
        subtitle="Original UNBS reports for a tested Humble Beeing raw honey sample."
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/291f49cddd44907c1c209a4b77b446bf521d47b7-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      >
        <p className="rt" style={{ marginTop: '16px', maxWidth: '42rem', color: 'white', '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
          Review the results and methods reported by the Uganda National Bureau of Standards.
        </p>
      </HeroSection>

      <div
        className="rpx rpy"
        style={{
          position: 'relative',
          maxWidth: '72rem',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '--px': '24px',
          '--px-md': '48px',
          '--py': '48px',
          '--py-md': '80px',
        }}
      >
        <div className="rmb" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', '--mb': '40px', '--mb-md': '64px' }}>
          <h2
            className="rt"
            style={{ '--fs': '1.5rem', '--lh': '2rem', '--fs-md': '2.25rem', '--lh-md': '2.75rem', '--ls-md': '-0.025em', fontWeight: 600, fontFamily: hanken }}
          >
            Published reports
          </h2>
          <p className="rt" style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', maxWidth: '48rem' }}>
            These two reports cover the same raw honey sample, L/5087/2025MC. The chemistry report records moisture, acidity, ash, and HMF;
            the microbiology report records coliforms and yeast and moulds. The results apply to this sample only. The reports do not test
            pesticide residues, antibiotics, adulteration, or every harvest batch.
          </p>
        </div>

        <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(2, 1fr)' }}>
          {labReports.map((report) => (
            <div
              key={report.title}
              className="rp"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                gap: '8px',
                backgroundColor: 'white',
                '--p': '16px',
                '--p-md': '24px',
                marginRight: '24px',
                borderRadius: '1rem',
                boxShadow: '0 12px 30px rgba(0, 8, 25, 0.08)',
                border: '2px solid #000819',
              }}
            >
              <div>
                <h2 style={{ fontSize: '1rem', lineHeight: '1.5rem', fontWeight: 600, fontFamily: hanken }}>
                  {report.title}
                </h2>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem', color: '#52525b' }}>
                  {report.subtitle}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {report.metrics.map((metric) => (
                  <span
                    key={metric.label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      minHeight: '20px',
                      backgroundColor: '#000819',
                      color: '#f5cb81',
                      borderRadius: '9999px',
                      padding: '4px 12px',
                      fontSize: '0.75rem',
                      lineHeight: '1rem',
                      fontWeight: 500,
                    }}
                  >
                    {metric.label}: {metric.value}
                  </span>
                ))}
              </div>

              <a
                href={report.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-fade"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '40px',
                  padding: '0 16px',
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  fontWeight: 500,
                  borderRadius: '4px',
                  backgroundColor: '#000819',
                  color: 'white',
                }}
              >
                View Original Report
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

LabTestsPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
);
