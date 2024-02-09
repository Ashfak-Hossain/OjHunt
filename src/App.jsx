import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import OnlineJudgeList from './components/OnlineJudgeNavigation';
import { Route, Routes } from 'react-router-dom';
import UHunt from './components/Uva/UHunt';
import NotFound from './components/Errors/NotFound';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "aside footer"`,
      }}
      templateColumns={{ lg: '1fr 3fr' }}
      columnGap={{ sm: 20, lg: '50px' }}
      marginX={{ sm: '30px', lg: '50px', xl: '100px' }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <OnlineJudgeList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Routes>
          <Route path="/uva" element={<UHunt userid={1448698} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GridItem>

      <GridItem bg="blueviolet" area="footer">
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
