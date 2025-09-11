import { Box, Container, Heading, HStack, Image, Link } from '@chakra-ui/react'
import Marquee from '@/components/Marquee'

export default function StockistsCarousel({ title = 'Trusted Supplier To', logos, speed = 25, gap = 48, containerProps = {} }) {
  const items = logos && logos.length ? logos : [
    { alt: 'Latitude 0 Hotel', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622463/latitude-logo-black_vswv88.png' },
    { alt: 'Le Gourmet Delicatessen', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622577/legourmetlogo_jwnh4y.png' },
    { alt: 'Yujo Izakaya', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622621/yujo_logo_saqrhi.png' },
    { alt: 'Karuna Yoga Studio', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622662/karuanyogologo_btlwvf.png' },
    // { alt: 'Entebbe Duty Free', src: '/Vector.svg' },
    { alt: 'Coffee At Last', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622662/karuanyogologo_btlwvf.png' },
    { alt: '32 Degree East', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622961/32east_hvuk3u.jpg' },
    { alt: 'Farm to Table', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622734/farmtotable_ilqbss.jpg' },
    { alt: 'Afrotide Crafts', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622805/afrotide_g6egnn.jpg' },

  ]

  return (
    <Box py={{ base: 10, md: 16 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} {...containerProps}>
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
