import { Box, Container, Heading, HStack, Image, Link } from '@chakra-ui/react'
import Marquee from '@/components/Marquee'

export default function StockistsCarousel({ title = 'Trusuted Supplier To', logos, speed = 25, gap = 48 }) {
  const items = logos && logos.length ? logos : [
    { alt: 'Partner 1', src: '/file.svg' },
    { alt: 'Partner 2', src: '/next.svg' },
    { alt: 'Partner 3', src: '/vercel.svg' },
    { alt: 'Partner 4', src: '/Vector.svg' },
    { alt: 'Partner 5', src: '/globe.svg' },
  ]

  return (
    <Box py={{ base: 10, md: 16 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <Heading as="h2" size="md" mb={{ base: 4, md: 6 }}>
          {title}
        </Heading>
        <Marquee speed={speed} gap={gap}>
          {items.map((item, idx) => {
            const content = (
              <HStack
                key={idx}
                bg={'rgba(255, 255, 255, 0.6)'}
                borderWidth="2px"
                borderColor="black"
                rounded="full"
                boxShadow="md"
                style={{ backdropFilter: 'blur(10px)' }}
                px={{ base: 4, md: 6 }}
                py={{ base: 2, md: 3 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt || 'Stockist'}
                  height={{ base: '28px', md: '36px' }}
                  width="auto"
                  objectFit="contain"
                  opacity={0.9}
                  sx={{ filter: 'grayscale(1)' }}
                />
              </HStack>
            )
            return item.href ? (
              <Link key={idx} href={item.href} isExternal _hover={{ textDecoration: 'none' }}>
                {content}
              </Link>
            ) : (
              content
            )
          })}
        </Marquee>
      </Container>
    </Box>
  )
}

