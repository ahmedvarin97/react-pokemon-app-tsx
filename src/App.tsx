import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataSource } from "./data/actions/DataSource";
import { HomeLayout } from "./data/pages/Home";
import { PokemonDetailInfo } from "./data/pages/PokemonDetail";

const App = () => {
  return (
    <DataSource>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/pokemon/:name" element={<PokemonDetailInfo />} />
        </Routes>
      </Router>
    </DataSource>
  );
};

export default App;