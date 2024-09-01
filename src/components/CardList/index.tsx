import ProductCard from "../ProductCard"
import { ProductList } from "./styled"
import { useGetProductsQuery } from "../../services/productsApi"
import { useAppSelector } from "../../hooks/redux"
import { getFilterShow } from "../../store/selectors/filter-selector"
import { getLikedProducts } from "../../store/selectors/like-selector"
import Skeleton from "../Skeleton"

const CardList = () => {
  const { data: products, isLoading } = useGetProductsQuery()
  const showLikedOnly = useAppSelector(getFilterShow)
  const likedProducts = useAppSelector(getLikedProducts)

  if (isLoading) {
    return (
      <Skeleton />
    )
  }

  const filteredProducts = showLikedOnly 
    ? products?.filter(product => likedProducts.includes(product.id)) 
    : products
  
  return (
    <ProductList>
      {
        filteredProducts?.map(product => <ProductCard key={product.id} product={product} />) 
      }
    </ProductList>
  )
}

export default CardList