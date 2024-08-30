import ProductCard from "../ProductCard"
import { ProductList } from "./styled"
import { useGetProductsQuery } from "../../services/productsApi"

const CardList = () => {
  const { data: products, isLoading } = useGetProductsQuery()

  if (isLoading) return <div>Loading...</div>
  
  return (
    <ProductList>
      {
        products?.map(product => <ProductCard product={product} />) 
      }
    </ProductList>
  )
}

export default CardList