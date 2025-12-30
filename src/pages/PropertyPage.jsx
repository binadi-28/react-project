import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";
import ImageGallery from "../components/ImageGallery";
import TabsSection from "../components/TabsSection";

function PropertyPage() {
  const { id } = useParams();

  const property = propertiesData.properties.find(
    (p) => p.id === id
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div>
      <h2>
        £{property.price.toLocaleString()} – {property.type}
      </h2>
      <p>{property.bedrooms} bedrooms · {property.postcode}</p>

      {/* Image Gallery */}
      <ImageGallery images={property.images} />

      {/* Tabs */}
      <TabsSection
        description={property.description}
        floorPlan={property.floorPlan}
        mapUrl={property.mapUrl}
      />
    </div>
  );
}

export default PropertyPage;
