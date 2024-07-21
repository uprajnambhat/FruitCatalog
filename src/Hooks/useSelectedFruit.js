import { useSelector } from "react-redux";
import { useFruitDetails } from "./useFruitDetails";
import { useEffect, useState } from "react";

export const useSelectedFruit = (fruitCategory, fruit) => {
  const selectedCategory = useFruitDetails(fruitCategory);
  console.log("selectedCategory", selectedCategory);
  const selectedFruit = selectedCategory.filter((eachSelectedFruit) => {
    return eachSelectedFruit.name == fruit;
  });
  return selectedFruit;
};
