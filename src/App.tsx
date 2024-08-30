import { Container } from "@mui/material"
import CardList from "./components/CardList"
import FilterButton from "./components/FilterButton"

function App() {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <FilterButton />
      </div>
      <CardList />
    </Container>
  )
}

export default App
