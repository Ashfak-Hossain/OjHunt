import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

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
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>

      <GridItem bg="blueviolet" area="footer">
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
