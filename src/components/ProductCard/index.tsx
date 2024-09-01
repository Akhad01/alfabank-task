import Button from '@mui/joy/Button';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

import { ProductItem } from '../../types/product-item';
import { useDeleteProductsMutation } from '../../services/productsApi';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleLike } from '../../store/slices/like-slice';
import { getLikedProducts } from '../../store/selectors/like-selector';

import { CardWrapper, Image, ImageContainer, LinkWrapper, Text } from './styled';

interface Props {
  product: ProductItem
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch()
  const likedProducts = useAppSelector(getLikedProducts);
  const isLiked = likedProducts.includes(product.id)

  const [deleteProduct] = useDeleteProductsMutation()

  const handleDelete = async () => {
    try {
      await deleteProduct(product.id).unwrap() 
    } catch (error) {
      console.error('Failed to delete the product:', error);
    }
  }

  const handleLike = () => {
    dispatch(toggleLike(product.id))
  }

  return (
    
      <CardWrapper
        variant="outlined"
      >
        <LinkWrapper to={`/${product.id}`}>
          <ImageContainer>
            <Image
              src={product.image}
            />
          </ImageContainer>
          <CardContent>
            <Text level="title-lg" sx={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>{product.title}</Text>
            <Text level="body-sm" sx={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
              {product.description}
            </Text>
          </CardContent>
        </LinkWrapper>
          <CardActions buttonFlex="0 1 130px">
            <div>
              <Text fontFamily={{  }} level="body-xs">Total price:</Text>
              <Text fontSize="lg" fontWeight="lg">
                ${product.price}
              </Text>
            </div>
            <IconButton onClick={handleLike} variant="outlined" color="neutral" >
              <FavoriteBorder style={{color: isLiked ? "red" : "black"}} />
            </IconButton>
            <Button onClick={handleDelete} variant="solid" color="primary">
              Delete
            </Button>
          </CardActions>
      </CardWrapper>
  )
}

export default ProductCard