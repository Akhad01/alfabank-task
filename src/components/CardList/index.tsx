import ProductCard from "../ProductCard"
import { ProductList } from "./styled"
import { useGetProductsQuery } from "../../services/productsApi"

const CardList = () => {
  const { data, isLoading } = useGetProductsQuery()

  if (isLoading) return <div>Loading...</div>
  
  return (
    <ProductList>
      {
        data?.map(item => <ProductCard item={item} />) 
      }
    </ProductList>
  )
}

export default CardList