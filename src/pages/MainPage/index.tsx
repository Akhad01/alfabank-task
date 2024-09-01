import { Container } from "@mui/material"
import FilterButton from "../../components/FilterButton"
import CardList from "../../components/CardList"
import { FilterWrapper } from "./styled"

const MainPage = () => {
  return (
    <Container>
      
      <FilterWrapper>
        <FilterButton />
      </FilterWrapper>
      <CardList />
    </Container>
  )
}

export default MainPage