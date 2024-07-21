import { combineReducers, createStore } from "redux";
import { FruitsCategoryReducer } from "./FruitsCategoryHeading/FruitsCategoryReducer";

const reducer = combineReducers({
  fruitsDetails: FruitsCategoryReducer,
});

const store = createStore(reducer);
export default store;
