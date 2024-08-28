import { useEffect, useState } from "react"
import ProductCard from "../ProductCard"
import { ProductList } from "./styled"

const CardList = () => {
  const [test, setTest] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setTest(json))
  }, [])
  console.log(test);
  
  return (
    <ProductList>
      {
        test && test.map(item => <ProductCard item={item} />) 
      }
    </ProductList>
  )
}

export default CardList