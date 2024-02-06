import { Grid, GridItem, Show } from '@chakra-ui/react';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "aside footer"`,
      }}
    >
      <GridItem bg="coral" area="nav">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bg="gold" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem bg="dodgerblue" area="main">
        Main
      </GridItem>
      <GridItem bg="blueviolet" area="footer">
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
