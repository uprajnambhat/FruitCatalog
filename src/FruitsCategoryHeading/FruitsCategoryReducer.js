import { fruitsDetails } from "../fruitsDeatils";

const initialstate = {
  fruitsDetails: fruitsDetails,
};

console.log("fruidetails is ", fruitsDetails);

export const FruitsCategoryReducer = (state = initialstate, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
