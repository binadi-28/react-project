import { useState } from "react";
import SearchForm from "../components/SearchForm";
import propertiesData from "../data/properties.json";

function SearchPage() {
  const [results, setResults] = useState([]);

  const handleSearch = (criteria) => {
    const filteredProperties = propertiesData.properties.filter((property) => {
      // 1️⃣ Property Type
      if (criteria.type && property.type !== criteria.type) {
        return false;
      }

      // 2️⃣ Price Range
      if (
        property.price < criteria.price[0] ||
        property.price > criteria.price[1]
      ) {
        return false;
      }

      // 3️⃣ Bedrooms (minimum)
      if (
        criteria.bedrooms &&
        property.bedrooms < Number(criteria.bedrooms)
      ) {
        return false;
      }

      // 4️⃣ Date Added
      if (criteria.dateAdded) {
        const propertyDate = new Date(property.added);
        if (propertyDate < criteria.dateAdded) {
          return false;
        }
      }

      // 5️⃣ Postcode Area
      if (
        criteria.postcode &&
        !property.postcode.startsWith(criteria.postcode)
      ) {
        return false;
      }

      return true;
    });

    setResults(filteredProperties);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />

      <h3>Search Results</h3>

      {results.length === 0 && <p>No properties found</p>}

      <ul>
        {results.map((property) => (
          <li key={property.id}>
            {property.type} – £{property.price} – {property.bedrooms} bedrooms
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;


