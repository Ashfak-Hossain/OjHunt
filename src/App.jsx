import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import UHunt from './components/uHunt/UHunt';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "aside footer"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem bgColor="grey" area="aside">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" paddingX="50px">
        <UHunt userid={1448698} />
      </GridItem>

      <GridItem bg="blueviolet" area="footer">
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
