import Button from '@mui/joy/Button';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { CardWrapper, Image, ImageContainer } from './styled';

const ProductCard = ({ item }) => {
  return (
    <CardWrapper
      variant="outlined"
    >
      <ImageContainer>
        <Image
          src={item.image}
        />
      </ImageContainer>
      <CardContent>
        <Typography level="title-lg" sx={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>{item.title}</Typography>
        <Typography level="body-sm" sx={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 130px">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${item.price}
          </Typography>
        </div>
        <IconButton variant="outlined" color="neutral" >
          <FavoriteBorder />
        </IconButton>
        <Button variant="solid" color="primary">
          Delete
        </Button>
      </CardActions>
    </CardWrapper>
  )
}

export default ProductCard