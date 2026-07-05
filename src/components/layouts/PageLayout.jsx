import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Toasts from '@/components/Toasts'

export default function PageLayout({ children, navbarProps }) {
  const overlayOnHero = navbarProps?.overlayOnHero || false
  return (
    <div style={{ backgroundColor: '#FFF2D7' }}>
      <Navbar {...(navbarProps || {})} />
      {/* Prevent floating nav pill from overlapping non-hero content on desktop */}
      <main className="rpt" style={{ '--pt': '0px', '--pt-lg': overlayOnHero ? '0px' : '112px' }}>
        {children}
      </main>
      <Footer />
      <Toasts />
    </div>
  )
}
