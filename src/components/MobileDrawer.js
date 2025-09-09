import {
  Box,
  Flex, // Keep Flex if used elsewhere, otherwise remove if unused
  HStack, // Keep HStack if used elsewhere, otherwise remove if unused
  Link,
  IconButton, // Keep IconButton if used elsewhere, otherwise remove if unused
  Button,
  Drawer,
  VStack,
  Text,
  Portal,
} from '@chakra-ui/react';
import { Menu, X } from 'lucide-react';
import { useRef } from "react"; // Keep useRef

// Reusable NavLink component
const NavLink = ({ children, href }) => (
  <Link
    px={3}
    py={1}
    rounded={'md'}
    color={'#000819'}
    _hover={{
      textDecoration: 'none',
    }}
    href={href}
    fontFamily="var(--font-hanken)"
    fontWeight={600}
  >
    {children}
  </Link>
);

export default function MobileDrawer({ isOpen, onClose, navItems, getInTouchText = "Get in Touch", triggerColor = '#000819' }) {
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
        <Menu 
          color={triggerColor}
          size={'2rem'}
          // Removed mr={-10} as it might be specific styling not needed for the focus fix
        />
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          {/* 2. Attach the ref to Drawer.Content */}
          <Drawer.Content ref={contentRef} bg='#f5cb81' color="#000819"> 
            <Drawer.Body>
              <VStack spacing={12} align="stretch" pt={'6rem'}>
                {navItems.map((item) => (
                  <NavLink key={item.label} href={item.href}>
                    <Text
                      fontSize={"1.75rem"}
                      fontFamily="var(--font-hanken)"
                      fontStyle='normal'
                      fontWeight={600}
                      color="#000819"
                      lineHeight={'normal'}
                      letterSpacing="0.14rem"
                      textTransform={'uppercase'}
                      mb={4} // mb={4} might be better on NavLink or VStack item
                    >
                      {item.label}
                    </Text>
                  </NavLink>
                ))}
                {/* Wrap the Button inside NavLink only if the button itself should navigate */}
                {/* If the Button triggers an action *within* the app, it shouldn't be wrapped in NavLink */}
                {/* Assuming it navigates to /contact: */}
                <NavLink href='/contact-and-connect'> 
                  <Button
                    px={'0.625rem'}
                    py={'1.25rem'}
                    variant={'solid'}
                    bg={'#000819'}
                    color={'white'}
                    borderRadius={'2px'}
                    _hover={{ opacity: 0.9 }}
                    fontFamily="Poppins"
                    fontWeight={500}
                    w="full"
                  >
                    <Text
                      fontSize={"1.75rem"}
                      fontFamily="var(--font-hanken)"
                      fontStyle='normal'
                      fontWeight={600}
                      color={'white'}
                      lineHeight={'normal'}
                      letterSpacing="0.14rem"
                      textTransform={'uppercase'}
                    >
                      {getInTouchText}
                    </Text>
                  </Button>
                </NavLink>
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
