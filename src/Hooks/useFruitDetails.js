import { useSelector } from "react-redux";

export const useFruitDetails = (fruitCategory) => {
  const { fruitsDetails = [] } = useSelector((state) => state.fruitsDetails);
  const { category = "", subcategories = [] } = fruitsDetails[0] || {};
  const filterData = subcategories.filter((eachCategoryDetails) => {
    console.log(eachCategoryDetails);
    return eachCategoryDetails.name == fruitCategory;
  });
  const { name = "", varieties = [] } = filterData[0] || {};
  console.log("aaaa", varieties);
  return varieties;
};
