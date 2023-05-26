import React from 'react';
import { Box, Stack } from '@chakra-ui/react';

import SEO from '../components/seo';
import ReelTipograficoVideo from '../videos/reel_tipografico_subte.mp4';
import ReelTipograficoMobileVideo from '../videos/reel_tipografico_subte_mobile.mp4';

const IndexPage = () => {
  return (
    <>
      <Stack height="calc(100vh - 72.5px)" marginInline={[0, 0, 0]} mx="auto" overflowY="scroll">
        <Box display={['none', 'none', 'block']} position="relative">
          <video autoPlay controls loop muted playsInline width="100%">
            <source src={ReelTipograficoVideo} type="video/mp4" />
          </video>
        </Box>
        <Box display={['block', 'block', 'none']} position="relative">
          <video autoPlay controls loop muted playsInline>
            <source src={ReelTipograficoMobileVideo} type="video/mp4" />
          </video>
        </Box>
      </Stack>
    </>
  );
};

export default IndexPage;

export function Head() {
  return <SEO title="" />;
}
