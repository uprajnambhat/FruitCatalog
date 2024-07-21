import React from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFruitDetails } from "../utils";
import { useFruitDetails } from "../Hooks/useFruitDetails";

const SubFruitsCategory = () => {
  const param = useParams();
  const { fruitCategory } = param;
  const varieties = useFruitDetails(fruitCategory);
  console.log("test2", varieties);
  const navigate = useNavigate();
  const onFruitClick = (selectedFruit) => {
    navigate(`/fruitCategory/${fruitCategory}/${selectedFruit.name}`);
  };

  return (
    <div className="headingStyle">
      <h5 style={{ color: "red" }}>{fruitCategory} details :</h5>
      <Table striped bordered hover>
        <tbody>
          <tr>
            {varieties.map((eachData, index) => {
              const {
                name: fruitName,
                color = "",
                taste = "",
                nutrition = {},
                harvestSeason = "",
                growingRegions = [],
                prices = {},
                availability = {},
              } = eachData;
              return (
                <td key={`eachData index ${index}`}>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      onFruitClick(eachData);
                    }}
                  >
                    {fruitName}
                  </Button>
                </td>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SubFruitsCategory;
