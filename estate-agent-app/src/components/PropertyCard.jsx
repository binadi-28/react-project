import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";

function PropertyCard({ property }) {
  const { addFavourite } = useFavourites();

  return (
    <Card
      sx={{ maxWidth: 345 }}
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData("property", JSON.stringify(property))
      }
    >
      <CardMedia
        component="img"
        height="180"
        image={property.images[0]}
        alt={property.type}
      />

      <CardContent>
        <Typography variant="h6">
          £{property.price.toLocaleString()}
        </Typography>

        <Typography variant="body2">
          {property.type} · {property.bedrooms} bedrooms
        </Typography>

        <Button
          variant="contained"
          size="small"
          sx={{ mt: 1, mr: 1 }}
          onClick={() => addFavourite(property)}
        >
          ❤️ Favourite
        </Button>

        <Button
          component={Link}
          to={`/property/${property.id}`}
          variant="outlined"
          size="small"
          sx={{ mt: 1 }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
