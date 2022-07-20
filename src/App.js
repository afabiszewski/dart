import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Deck } from './components/Deck';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={20} alignSelf={'center'}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Box mt={2} alignItems={'center'}>
            <Deck />
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
