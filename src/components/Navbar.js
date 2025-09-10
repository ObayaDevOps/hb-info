import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useDisclosure,
  useBreakpointValue,
  VStack,
  Image,
  Dialog,
  Text,
  Portal,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Form from '@/components/Form'
import MobileDrawer from './MobileDrawer'; // Import the new component

const NavLink = ({ children, href, color, isExternal, ...rest }) => (
  <Link
    px={3}
    py={1}
    rounded={'md'}
    color={color}
    _hover={{
      textDecoration: 'none',
      // Add a subtle hover effect if desired
      // bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}
    isExternal={isExternal}
    {...rest}
    fontFamily="var(--font-hanken)"
    fontWeight={600}
  >
    {children}
  </Link>
);

export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Use 'lg' breakpoint to switch between desktop and mobile nav
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [scrolled, setScrolled] = useState(false);
  const overlayOnHero = props.overlayOnHero || false;
  useEffect(() => {
    if (!overlayOnHero) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlayOnHero]);

  const isOverlay = overlayOnHero && !scrolled;
  const navBg = isOverlay ? 'transparent' : (props.bg || '#f5cb81');
  const linkColor = isOverlay ? 'white' : '#000819';
  const blackLogo = 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1752839793/Humble_Beeing_Black_Logo_with_text.svg'
  const whiteLogo = 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757495029/WhiteLogo_of0ehe.png'
  const logoSrc = isOverlay ? whiteLogo : blackLogo

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Shop', href: 'https://shop.humble-beeing.com', external: true },
    { label: 'Impact', href: '/impact-and-sustainability' },
    { label: 'Blog', href: '/blog' },
    { label: 'Wholesale', href: '/wholesale-and-partnerships' },
    { label: 'Contact', href: '/contact-and-connect' },
  ];

  return (
    <Box 
    px={{base: '2rem', lg: '5.5rem'}} 
    py={{base: '1rem', lg: '1rem'}} 
    position={overlayOnHero ? 'fixed' : 'sticky'} 
    top={0} 
    left={0}
    right={0}
    zIndex={1000}
    bg={navBg}
    // bgGradient={{base:"to-b", lg: 'none'}}
    // gradientFrom={{base: props.bg ,lg: 'none'}}
    // gradientTo={{base:'transparent', lg: 'none'}}
    >
     <Flex 
      h={16} 
      alignItems={'center'} 
      justifyContent={'space-between'} 
      maxW="container.xl" 
      mx="auto"
      display={{base: 'none', lg: 'flex'}}
      >
        {/* Logo switches: white on overlay hero, black otherwise */}
        <Link href="/" _hover={{ textDecoration: 'none' }}>
             <Image
                src={logoSrc}
                alt="The Humble Beeing Logo"
                height={'55px'}
                width={'auto'} // Maintain aspect ratio
                mt={0}
             />
        </Link>


          <Flex display={{base: 'none', lg: 'flex'}}>
            {/* Desktop Navigation Links */}
            <HStack spacing={'1.5rem'} alignItems={'left'}>
              <HStack as={'nav'} spacing={'1.5rem'}>
                {navItems.map((item) => (
                  <NavLink key={item.label} href={item.href} color={linkColor} isExternal={item.external}>
                    {item.label}
                  </NavLink>
                ))}
              </HStack>

              {/* Contact modal removed; using Contact link in nav */}

            </HStack>
          </Flex>

      </Flex>

      {/* Mobile Drawer */}
      <Box>
        <Flex display={{ base: 'flex', lg: 'none' }} alignItems="center" justifyContent="space-between" w="100%">
          {/* Left: Drawer trigger with fixed width to balance center */}
          <Box w="2.5rem" display="flex" justifyContent="flex-start">
            <MobileDrawer
              isOpen={isOpen}
              onClose={onClose}
              navItems={navItems}
              getInTouchText="Get in Touch"
              triggerColor={linkColor}
            />
          </Box>

          {/* Center: Logo */}
          <Box flex="1" textAlign="center">
            <Link href="/" _hover={{ textDecoration: 'none' }}>
              <Image
                src={logoSrc}
                alt="The Humble Beeing Logo"
                height={'50px'}
                width={'auto'}
              />
            </Link>
          </Box>

          {/* Right: Empty box to keep logo centered */}
          <Box w="2.5rem" />
        </Flex>
      </Box>
    </Box>
  );
}
