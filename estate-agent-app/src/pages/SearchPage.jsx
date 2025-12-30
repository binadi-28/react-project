import { useState } from "react";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import propertiesData from "../data/properties.json";
import FavouriteList from "../components/FavouriteList";


function SearchPage() {
  const [results, setResults] = useState([]);

  const handleSearch = (criteria) => {
    const filteredProperties = propertiesData.properties.filter((property) => {
      if (criteria.type && property.type !== criteria.type) return false;

      if (
        property.price < criteria.price[0] ||
        property.price > criteria.price[1]
      )
        return false;

      if (
        criteria.bedrooms &&
        property.bedrooms < Number(criteria.bedrooms)
      )
        return false;

      if (criteria.dateAdded) {
        if (new Date(property.added) < criteria.dateAdded) return false;
      }

      if (
        criteria.postcode &&
        !property.postcode.startsWith(criteria.postcode)
      )
        return false;

      return true;
    });

    setResults(filteredProperties);
  };

  return (
  <div style={{ display: "flex", gap: "20px" }}>
    <div style={{ flex: 3 }}>
      <SearchForm onSearch={handleSearch} />
      <PropertyList properties={results} />
    </div>

    <div style={{ flex: 1 }}>
      <FavouriteList />
    </div>
  </div>
);

}

export default SearchPage;
