
import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

function PropertyPage() {
  const { id } = useParams();

  // Find the property by ID
  const property = propertiesData.properties.find((p) => p.id === id);

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {property.type} - £{property.price.toLocaleString()}
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        {property.bedrooms} bedrooms · {property.postcode}
      </Typography>

      {/* Images */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
        {property.images.map((img, index) => (
          <Card key={index} sx={{ maxWidth: 250 }}>
            <CardMedia component="img" height="140" image={img} alt={`${property.type} ${index + 1}`} />
          </Card>
        ))}
      </div>

      {/* Description */}
      <Typography variant="body1" gutterBottom>
        {property.description}
      </Typography>

      {/* Floor Plan */}
      {property.floorPlan && (
        <div style={{ margin: "20px 0" }}>
          <Typography variant="h6">Floor Plan</Typography>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia component="img" image={property.floorPlan} alt="Floor Plan" />
          </Card>
        </div>
      )}

      {/* Map */}
      {property.mapUrl && (
        <div style={{ margin: "20px 0" }}>
          <Typography variant="h6">Location</Typography>
          <iframe
            src={property.mapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Property Map"
          ></iframe>
        </div>
      )}

      <Button variant="contained" sx={{ mt: 2 }}>
        Contact Agent
      </Button>
    </div>
  );
}

export default PropertyPage;
