import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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

        <Typography variant="body2" color="text.secondary">
          {property.type} · {property.bedrooms} bedrooms
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          {property.description}
        </Typography>

        <Button
          component={Link}
          to={`/property/${property.id}`}
          variant="outlined"
          size="small"
          sx={{ mt: 2 }}
        >
          View Property
        </Button>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
