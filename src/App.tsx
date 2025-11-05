import { Box, Button, Grid, GridItem, Heading, Show, VStack } from '@chakra-ui/react'

function App() {
  return (
    <>
    <Box bg={'coral'}>
     Nav
    </Box>
    <Grid templateColumns={{base: '1fr', lg: '1fr 1fr'}}>
      <Show above="lg">
      <GridItem bg={"red"}> aside</GridItem>
      </Show>
      <GridItem bg={"blue"}> main</GridItem>
    </Grid>
    </>

  )

}

export default App
