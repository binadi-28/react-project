import { useState } from "react";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import propertiesData from "../data/properties.json";

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
    <div>
      <SearchForm onSearch={handleSearch} />

      {results.length > 0 && <PropertyList properties={results} />}

      {results.length === 0 && <p>No properties found</p>}
    </div>
  );
}

export default SearchPage;
