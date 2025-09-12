import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Drawer,
  VStack,
  Text,
  Portal,
} from '@chakra-ui/react';
import { Menu, X } from 'lucide-react';
import { useRef } from "react"; // Keep useRef

// Reusable NavLink component with icon support
const NavLink = ({ children, href, isExternal, active }) => (
  <Link
    px={3}
    py={2}
    rounded={active ? '4xl' : 'md'}
    bg={active ? 'rgba(0, 8, 25, 0.08)' : 'transparent'}
    color={'#000819'}
    _hover={{ textDecoration: 'none', opacity: 0.9 }}
    href={href}
    isExternal={isExternal}
    fontFamily="var(--font-hanken)"
    fontWeight={600}
    borderWidth={active ? '2px' : '0px'}
    borderColor={active ? '#000819' : 'transparent'}
    aria-current={active ? 'page' : undefined}
  >
    {children}
  </Link>
);

export default function MobileDrawer({ isOpen, onClose, navItems, getInTouchText = "Get in Touch", triggerColor = '#000819', triggerSize = '2rem' }) {
  // 1. Create a ref for the Drawer Content
  const contentRef = useRef(null);

  return (
    // Use Drawer from Chakra UI Ark integration directly if preferred, or keep as is if using Radix via Ark
    <Drawer.Root 
        size={'full'} 
        placement="start" 
        // 3. Use the contentRef for initialFocusEl
        initialFocusEl={contentRef} 
        // Note: isOpen and onClose are typically managed by Drawer.Root's context, 
        // unless you need external control. If using external control, 
        // you might need `open={isOpen}` and `onOpenChange={(open) => !open && onClose()}` props.
        // Check Chakra UI Ark/Radix documentation for the specific props if needed.
        // Assuming default context-based control for simplicity here.
    >
      <Drawer.Trigger asChild>
        <Menu color={triggerColor} size={triggerSize} />
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          {/* 2. Attach the ref to Drawer.Content */}
          <Drawer.Content
            ref={contentRef}
            bg='rgba(255, 255, 255, 0.8)'
            color="#000819"
            style={{ backdropFilter: 'blur(10px)' }}
          > 
            <Drawer.Body>
              <VStack spacing={8} align="stretch" pt={'6rem'}>
                {navItems.map((item) => (
                  <NavLink key={item.label} href={item.href} isExternal={item.isExternal} active={item.active}>
                    <HStack spacing={3.6} align="center">
                      {item.icon ? (
                        <Box as={item.icon} boxSize={9} color="#000819" />
                      ) : null}
                      <Text
                        fontSize="1.6875rem"
                        fontFamily="var(--font-hanken)"
                        fontStyle='normal'
                        fontWeight={600}
                        color="#000819"
                        lineHeight='normal'
                        letterSpacing="0.02rem"
                        textTransform='none'
                      >
                        {item.label}
                      </Text>
                  </HStack>
                 </NavLink>
                ))}
                {/* Removed Get in Touch button per request */}
              </VStack>
            </Drawer.Body>

            <Drawer.CloseTrigger asChild>
              {/* Position the close button more intentionally, e.g., absolute positioning */}
              <Box position="absolute" top={4} right={4} m={2}> 
                <X color="#000819" size={'2.75rem'} cursor="pointer" /> 
              </Box>
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
