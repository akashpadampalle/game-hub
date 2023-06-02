import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" color="orange">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" color="blue">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" color="green">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
