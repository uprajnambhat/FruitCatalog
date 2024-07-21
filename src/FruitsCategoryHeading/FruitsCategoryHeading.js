import React from "react";
import { useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import "./fruitsCategoryHeading.css";
import { useNavigate } from "react-router-dom";

const FruitsCategoryHeading = () => {
  const { fruitsDetails = [] } = useSelector((state) => state.fruitsDetails);
  const navigate = useNavigate();
  const onCategoryClick = (selectedCategory) => {
    navigate(`/fruitCategory/${selectedCategory.name}`);
  };

  return (
    <div className="headingStyle">
      <h5 style={{ color: "red" }}>Fruits Category Details</h5>
      <Table striped bordered hover>
        <tbody>
          {fruitsDetails.map((eachCategoryDetails, index) => {
            const { category = "", subcategories = [] } = eachCategoryDetails;
            return (
              <tr key={`eachCategoryDetails-${index}`}>
                {subcategories.map((eachSubcategory, subindex) => {
                  const { name = "", varieties = [] } = eachSubcategory;
                  return (
                    <td key={`eachSubcategory-${subindex}`}>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          onCategoryClick(eachSubcategory);
                        }}
                      >
                        {name}
                      </Button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default FruitsCategoryHeading;
