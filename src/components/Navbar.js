import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  useBreakpointValue,
  Image,
  VisuallyHidden,
} from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import MobileDrawer from './MobileDrawer'
import { useRouter } from 'next/router'
// Dark mode removed from navbar
import {
  Home as HomeIcon,
  BookOpen as BookOpenIcon,
  Droplet as DropletIcon,
  ShoppingBag as ShoppingBagIcon,
  Leaf as LeafIcon,
  Newspaper as NewspaperIcon,
  Package as PackageIcon,
  Phone as PhoneIcon,
  Route as RouteIcon,
} from 'lucide-react'

const NavLink = ({ children, href, color, isExternal, ...rest }) => (
  <Link
    px={3}
    py={1}
    rounded={'md'}
    color={color}
    _hover={{ textDecoration: 'none' }}
    href={href}
    isExternal={isExternal}
    {...rest}
    fontFamily="var(--font-hanken)"
    fontWeight={600}
  >
    {children}
  </Link>
)

function FloatingPill({ items }) {
  const containerBg = 'rgba(255, 255, 255, 0.6)'
  const pillLogoSrc = 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1752839793/Humble_Beeing_Black_Logo_with_text.svg'

  return (
    <Box position="fixed" top={8} left={0} right={0} zIndex={1050} display="flex" justifyContent="center">
      <HStack
        spacing={{ base: 1.5, sm: 2.5 }}
        bg={containerBg}
        borderWidth="2px"
        borderColor="black"
        px={{ base: 3, sm: 4 }}
        py={{ base: 2, sm: 3 }}
        rounded="full"
        boxShadow="md"
        align="center"
        style={{ backdropFilter: 'blur(10px)' }}
        w={{ base: '90vw', lg: 'auto' }}
      >
        <Link
          href="/"
          _hover={{ textDecoration: 'none' }}
          display="inline-flex"
          alignItems="center"
          px={{ base: 3.5, sm: 5 }}
          py={1}
          rounded="full"
          mr={{ base: 8, sm: 10, md: 14, lg: 16 }}
        >
          <Image src={pillLogoSrc} alt="Humble Beeing Logo" height={{ base: '50px', sm: '40px' }} width="auto" />
        </Link>
        <HStack as="nav" align="center" spacing={{ base: 1.5, sm: 2 }}>
          {items
            .filter((it) => it.label !== 'Shop' && it.label !== 'Trace')
            .map((item) => (
              <Link
                key={item.label}
                href={item.href}
                isExternal={item.isExternal}
                role="group"
                position="relative"
                px={{ base: 4, sm: 5, md: 8 }}
                py={3}
                rounded="full"
                fontWeight={600}
                fontFamily="var(--font-hanken)"
                color={'black'}
                _hover={{ color: 'black', textDecoration: 'none' }}
                transition="color 200ms ease, transform 150ms ease"
              >
                <Box as="span" position="relative" zIndex={1} fontSize="lg">
                  {item.label}
                </Box>
                {!item.active ? (
                  <Box
                    aria-hidden
                    position="absolute"
                    inset={0}
                    rounded="full"
                    bg={'rgba(128, 128, 128, 0.12)'}
                    borderWidth="1px"
                    borderColor={'gray.300'}
                    zIndex={0}
                    opacity={0}
                    transition="opacity 150ms ease"
                    _groupHover={{ opacity: 1 }}
                  />
                ) : null}
                {item.active ? (
                  <Box
                    aria-hidden
                    position="absolute"
                    inset={0}
                    rounded="full"
                    bg={'rgba(128, 128, 128, 0.16)'}
                    borderWidth="1px"
                    borderColor={'gray.400'}
                    zIndex={0}
                  />
                ) : null}
              </Link>
            ))}
          {(() => {
            const trace = items.find((it) => it.label === 'Trace')
            if (!trace) return null
            return (
              <Link
                key={trace.label}
                href={trace.href}
                isExternal={trace.isExternal}
                display="inline-flex"
                alignItems="center"
                gap={2}
                px={{ base: 5, md: 7 }}
                py={3}
                rounded="full"
                fontWeight={700}
                fontFamily="var(--font-hanken)"
                bg="black"
                color="#f5cb81"
                borderWidth="1px"
                borderColor="black"
                _hover={{ bg: '#f5cb81', color: 'black', textDecoration: 'none' }}
                transition="all 150ms ease"
                ml={{ base: 4, md: 6 }}
              >
                {trace.icon ? <Box as={trace.icon} boxSize={5} /> : null}
                <Box as="span" fontSize="lg">
                  {trace.label}
                </Box>
              </Link>
            )
          })()}
          {(() => {
            const shop = items.find((it) => it.label === 'Shop')
            if (!shop) return null
            return (
              <Link
                key={shop.label}
                href={shop.href}
                isExternal={shop.isExternal}
                display="inline-flex"
                alignItems="center"
                gap={2}
                px={{ base: 5, md: 7 }}
                py={3}
                rounded="full"
                fontWeight={700}
                fontFamily="var(--font-hanken)"
                bg="black"
                color="#f5cb81"
                borderWidth="1px"
                borderColor="black"
                _hover={{ bg: '#f5cb81', color: 'black', textDecoration: 'none' }}
                transition="all 150ms ease"
                ml={{ base: 4, md: 6 }}
              >
                {shop.icon ? <Box as={shop.icon} boxSize={5} /> : null}
                <Box as="span" fontSize="lg">
                  {shop.label}
                </Box>
              </Link>
            )
          })()}
        </HStack>
      </HStack>
    </Box>
  )
}

export default function Navbar(props) {
  const { isOpen, onClose } = useDisclosure()
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const [overlayScrolled, setOverlayScrolled] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const overlayOnHero = props.overlayOnHero || false
  const router = useRouter()

  // Desktop navbar is hidden; no need to track scroll to toggle it
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!overlayOnHero) return
    const onScroll = () => setOverlayScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [overlayOnHero])

  const isOverlay = overlayOnHero && !overlayScrolled
  const navBg = isOverlay ? 'transparent' : props.bg || '#f5cb81'
  const linkColor = isOverlay ? 'white' : '#000819'
  const blackLogo = 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1752839793/Humble_Beeing_Black_Logo_with_text.svg'
  const whiteLogo = 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757495029/WhiteLogo_of0ehe.png'
  const mobileLogoSrc = blackLogo

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/', icon: HomeIcon },
      { label: 'Our Story', href: '/our-story', icon: BookOpenIcon },
      { label: 'Our Process', href: '/our-process', icon: DropletIcon },
      { label: 'Trace', href: 'https://trace.humble-beeing.com', isExternal: true, icon: RouteIcon },
      { label: 'Shop', href: 'https://shop.humble-beeing.com', isExternal: true, icon: ShoppingBagIcon },
      { label: 'Impact', href: '/impact-and-sustainability', icon: LeafIcon },
      { label: 'Blog', href: '/blog', icon: NewspaperIcon },
      { label: 'Wholesale', href: '/wholesale-and-partnerships', icon: PackageIcon },
      { label: 'Contact', href: '/contact-and-connect', icon: PhoneIcon },
    ],
    [],
  )

  const itemsWithActive = useMemo(() => {
    const asPath = router?.asPath || '/'
    const isActive = (href) => {
      if (!href || href.startsWith('http')) return false
      if (href === '/') return asPath === '/'
      return asPath.startsWith(href)
    }
    return navItems.map((i) => ({ ...i, active: isActive(i.href) }))
  }, [router?.asPath, navItems])

  return (
    <Box
      px={{ base: '2rem', lg: '5.5rem' }}
      py={{ base: '1rem', lg: 0 }}
      position={overlayOnHero ? 'fixed' : 'sticky'}
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={{ base: hasScrolled ? 'transparent' : navBg, lg: 'transparent' }}
    >
      {/* Desktop navbar hidden intentionally; pill is always visible on desktop */}

      <Box display={{ base: 'block', lg: 'none' }}>
        <Box display="flex" justifyContent="center">
          <Box
            bg={'rgba(255, 255, 255, 0.6)'}
            borderWidth="2px"
            borderColor="black"
            px={3}
            py={2}
            rounded="full"
            boxShadow="md"
            style={{ backdropFilter: 'blur(10px)' }}
            w="90vw"
            display="grid"
            gridTemplateColumns="1fr auto 1fr"
            alignItems="center"
            columnGap={3}
          >
            <Box justifySelf="start" ml={{ base: 2, sm: 3 }}>
              <MobileDrawer navItems={itemsWithActive} triggerColor={'black'} triggerSize={'1.5rem'} />
            </Box>
            <Link href="/" _hover={{ textDecoration: 'none' }} justifySelf="center">
              <Image src={mobileLogoSrc} alt="The Humble Beeing Logo" height={'36px'} width="auto" />
            </Link>
            <Link
              href="https://shop.humble-beeing.com"
              isExternal
              display="inline-flex"
              alignItems="center"
              gap={1.5}
              px={4}
              py={2}
              rounded="full"
              fontWeight={700}
              fontFamily="var(--font-poppins)"
              bg="black"
              color="#f5cb81"
              borderWidth="1px"
              borderColor="black"
              _hover={{ bg: '#f5cb81', color: 'black', textDecoration: 'none' }}
              transition="all 150ms ease"
              justifySelf="end"
            >
              <Box as={ShoppingBagIcon} boxSize={4} />
              <VisuallyHidden>Shop</VisuallyHidden>
            </Link>
          </Box>
        </Box>
      </Box>

      {isDesktop ? <FloatingPill items={itemsWithActive} /> : null}
    </Box>
  )
}
