import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import properties from "./data/properties.json";
import { useState } from "react";
import "./App.css";
import data from "./data/properties.json";
console.log(data.properties);


function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              properties={properties.properties}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/property/:id"
          element={
            <Details
              properties={properties.properties}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

