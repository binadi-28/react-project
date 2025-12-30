import { useState } from "react";
import { Box } from "@mui/material";

function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <Box>
      {/* Main Image */}
      <img
        src={mainImage}
        alt="Property"
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {/* Thumbnails */}
      <Box sx={{ display: "flex", gap: 1 }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            style={{
              width: "80px",
              cursor: "pointer",
              border: mainImage === img ? "2px solid blue" : "1px solid #ccc",
            }}
            onClick={() => setMainImage(img)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ImageGallery;
