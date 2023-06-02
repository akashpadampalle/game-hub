import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bgColor="blue">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bgColor="green">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
