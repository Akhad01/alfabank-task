import { Container } from "@mui/material"
import { CardSection, CardDescription, CardSectionImage, CardSectionInner, ProductCategory, ProductDescription, ProductPrice, ProductRating, ProductTitle, ProductCard, CardButton } from "./styled"
import { useNavigate, useParams } from "react-router-dom"
import { useGetProductByIdQuery } from "../../services/productsApi"
import StarIcon from '@mui/icons-material/Star';
import Skeleton from "../../components/Skeleton";

type Params = {
  id: string;
}

const CardPage = () => {
  const { id } = useParams<Params>()
  const { data, isLoading, error } = useGetProductByIdQuery(id as string)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  if (isLoading) {
    return <Skeleton />
  }

  if (error) {
    return <div>There was an error loading the product.</div>
  }

  return (
    <CardSection>
      <Container>
        <CardButton onClick={handleClick} variant="contained">
          Back
        </CardButton>
          <CardSectionInner>
            <ProductCard>
              <CardSectionImage src={data?.image} alt="product image" />
            </ProductCard>
            <CardDescription>
                <ProductCategory>{data?.category ?? ""}</ProductCategory>
                <ProductTitle>{data?.title ?? ""}</ProductTitle>
                <ProductRating>{data?.rating.rate ?? 0} <StarIcon /></ProductRating>
                <ProductPrice>${data?.price ?? 0}</ProductPrice>
                <ProductDescription>{data?.description ?? ""}</ProductDescription>
            </CardDescription>
          </CardSectionInner>
      </Container>
    </CardSection>
  )
}

export default CardPage