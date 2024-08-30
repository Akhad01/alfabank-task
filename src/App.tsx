import { Container } from "@mui/material"
import CardList from "./components/CardList"
import FilterButton from "./components/FilterButton"

function App() {
  return (
    <Container>
      <FilterButton />
      <CardList />
    </Container>
  )
}

export default App
