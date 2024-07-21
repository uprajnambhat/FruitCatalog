import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FruitsCategoryHeading from "./FruitsCategoryHeading/FruitsCategoryHeading";
import SubFruitsCategory from "./SubFruitsCategory/SubFruitsCategory";
import EachFruitDetails from "./SubFruitsCategory/EachFruitDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FruitsCategoryHeading />}></Route>
        <Route
          path="/fruitCategory/:fruitCategory"
          element={<SubFruitsCategory />}
        ></Route>
        <Route
          path="/fruitCategory/:fruitCategory/:fruit"
          element={<EachFruitDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
