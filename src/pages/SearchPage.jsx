import { useState } from "react";
import SearchForm from "../components/SearchForm";

function SearchPage() {
  const [criteria, setCriteria] = useState(null);

  const handleSearch = (searchCriteria) => {
    console.log("Search Criteria:", searchCriteria);
    setCriteria(searchCriteria);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
    </div>
  );
}

export default SearchPage;

