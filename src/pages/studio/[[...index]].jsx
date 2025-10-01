import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

import {
  Box
} from '@chakra-ui/react';

export default function StudioPage() {
  return (
    <Box minHeight={'120vh'} position="fixed" top="0" minWidth={'100vw'} zIndex={9999}>
        <Head>
            <title>Editor Studio | Humble Beeing</title>
            <meta name="description" content="Humble Beeing Content Studio" />
            <meta name="robots" content="noindex,nofollow,noarchive" />
        
        </Head>
        
        <NextStudio config={config} />
      </Box>
  )
}
