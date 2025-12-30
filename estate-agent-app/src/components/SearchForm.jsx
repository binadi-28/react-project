import { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Slider,
  Typography,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchForm({ onSearch }) {
  const [type, setType] = useState("");
  const [price, setPrice] = useState([0, 1000000]);
  const [bedrooms, setBedrooms] = useState("");
  const [dateAdded, setDateAdded] = useState(null);
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch({
      type,
      price,
      bedrooms,
      dateAdded,
      postcode,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2 }}
    >
      <Typography variant="h6" gutterBottom>
        Search Properties
      </Typography>

      {/* Property Type */}
      <TextField
        select
        label="Property Type"
        fullWidth
        margin="normal"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="House">House</MenuItem>
        <MenuItem value="Flat">Flat</MenuItem>
      </TextField>

      {/* Price Range */}
      <Typography gutterBottom>Price Range (£)</Typography>
      <Slider
        value={price}
        onChange={(e, newValue) => setPrice(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={1000000}
        step={50000}
      />

      {/* Bedrooms */}
      <TextField
        select
        label="Bedrooms"
        fullWidth
        margin="normal"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="1">1+</MenuItem>
        <MenuItem value="2">2+</MenuItem>
        <MenuItem value="3">3+</MenuItem>
        <MenuItem value="4">4+</MenuItem>
      </TextField>

      {/* Date Added */}
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Date Added After</Typography>
        <DatePicker
          selected={dateAdded}
          onChange={(date) => setDateAdded(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select date"
        />
      </Box>

      {/* Postcode */}
      <TextField
        label="Postcode Area"
        fullWidth
        margin="normal"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value.toUpperCase())}
        placeholder="e.g. BR5"
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchForm;
