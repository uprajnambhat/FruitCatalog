import React, { useState } from "react";
import { getFruitDetails } from "../utils";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import MoreDetails from "./MoreDetails";
import { useSelectedFruit } from "../Hooks/useSelectedFruit";

const EachFruitDetails = () => {
  const params = useParams();
  const { fruitCategory, fruit } = params;
  const [selectedNutritionDetails, setSelectedNutritionDetails] = useState({});
  const [selectedGrowingRegionsDetails, setSelectedGrowingRegionsDetails] =
    useState([]);
  const [selectedPricesDetails, setSelectedPricesDetails] = useState({});
  const [selectedAvailabilityDetails, setSelectedAvailabilityDetails] =
    useState({});

  const selectedFruit = useSelectedFruit(fruitCategory, fruit);

  const onNutritionClick = (nutritionDetails) => {
    console.log(nutritionDetails);
    setSelectedNutritionDetails({ ...nutritionDetails });
  };

  const onGrowingRegionsClick = (growingRegionsDetails) => {
    setSelectedGrowingRegionsDetails([...growingRegionsDetails]);
  };
  const onPricesClick = (pricesDetails) => {
    setSelectedPricesDetails({ ...pricesDetails });
  };
  const onAvailabilityClick = (availabilityDetails) => {
    setSelectedAvailabilityDetails({ ...availabilityDetails });
  };
  return (
    <div className="headingStyle">
      <h5 style={{ color: "red" }}>{fruit} Details:</h5>
      <Table striped bordered hover>
        <tbody>
          {selectedFruit.map((eachFruitDetails, index) => {
            console.log(eachFruitDetails);
            const {
              name = "",
              color = "",
              taste = "",
              nutrition = {},
              harvestSeason = "",
              growingRegions = [],
              prices = {},
              availability = {},
            } = eachFruitDetails;
            return (
              <>
                <tr key={`eachFruitDetails ${index}`}>
                  <td>Name:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Color:</td>
                  <td>{color}</td>
                </tr>
                <tr>
                  <td>Taste:</td>
                  <td>{taste}</td>
                </tr>
                <tr>
                  <td>Harvest Season:</td>
                  <td>{harvestSeason}</td>
                </tr>
                <tr>
                  <td>Nutrition:</td>
                  <td>
                    <Button
                      variant="link"
                      onClick={() => {
                        onNutritionClick(nutrition);
                        console.log(nutrition);
                      }}
                    >
                      Click for more details
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Growing Regions:</td>
                  <td>
                    <Button
                      variant="link"
                      onClick={() => {
                        onGrowingRegionsClick(growingRegions);
                      }}
                    >
                      Click for more details
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Prices:</td>
                  <td>
                    <Button
                      variant="link"
                      onClick={() => {
                        onPricesClick(prices);
                      }}
                    >
                      Click for more details
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Availability:</td>
                  <td>
                    <Button
                      variant="link"
                      onClick={() => {
                        onAvailabilityClick(availability);
                      }}
                    >
                      Click for more details
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <MoreDetails
        selectedNutritionDetails={selectedNutritionDetails}
        selectedGrowingRegionsDetails={selectedGrowingRegionsDetails}
        selectedPricesDetails={selectedPricesDetails}
        selectedAvailabilityDetails={selectedAvailabilityDetails}
      />
    </div>
  );
};

export default EachFruitDetails;
