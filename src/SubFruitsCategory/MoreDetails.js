import React, { useEffect, useRef } from "react";
import { Table } from "react-bootstrap";

const MoreDetails = (props) => {
  const {
    selectedNutritionDetails = {},
    selectedGrowingRegionsDetails = [],
    selectedPricesDetails = {},
    selectedAvailabilityDetails = {},
  } = props;
  const nutritionRef = useRef();
  const growingRegionsRef = useRef();
  const marketPriceRef = useRef();
  const marketAvailabilityRef = useRef();
  const {
    calories = "",
    carbs = "",
    fiber = "",
    vitamins = {},
  } = selectedNutritionDetails || {};
  const { vitaminC = "n/a", vitaminA = "n/a" } = vitamins;
  const { localMarket = "", superMarket = "" } = selectedPricesDetails;
  const marketPrice = !!localMarket || !!superMarket;
  const {
    localMarket: localMarketAvailability = "n/a",
    superMarket: superMarketAvailability = "n/a",
  } = selectedAvailabilityDetails;
  const marketAvailability =
    (localMarketAvailability !== "n/a" || superMarketAvailability !== "n/a") &&
    (localMarketAvailability !== undefined ||
      superMarketAvailability !== undefined);

  useEffect(() => {
    if (!!calories) {
      nutritionRef.current.scrollIntoView();
    }
  }, [calories]);

  useEffect(() => {
    if (selectedGrowingRegionsDetails.length > 0) {
      growingRegionsRef.current.scrollIntoView();
    }
  }, [selectedGrowingRegionsDetails]);

  useEffect(() => {
    if (marketPrice) {
      marketPriceRef.current.scrollIntoView();
    }
  }, [marketPrice]);
  useEffect(() => {
    if (marketAvailability) {
      marketAvailabilityRef.current.scrollIntoView();
    }
  }, [marketAvailability]);

  return (
    <div>
      {!!calories && (
        <>
          <h6 style={{ color: "red" }}>Nutrition Details:</h6>
          <Table striped bordered hover ref={nutritionRef}>
            <tbody>
              <tr>
                <td>Calories:</td>
                <td>{calories}</td>
              </tr>
              <tr>
                <td>Carbs:</td>
                <td>{carbs}</td>
              </tr>
              <tr>
                <td>Fiber:</td>
                <td>{fiber}</td>
              </tr>
              <h6 style={{ color: "red" }}>
                <br></br>Vitamins:
              </h6>
              <tr>
                <td>
                  Vitamin C <br></br>Vitamin A
                </td>
                <td>
                  {vitaminC}
                  <br></br>
                  {vitaminA}
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
      {selectedGrowingRegionsDetails.length > 0 && (
        <>
          <h6 style={{ color: "red" }}>Growing Regions:</h6>
          <Table striped bordered hover ref={growingRegionsRef}>
            <tbody>
              <tr>
                <td>Growing Regions:</td>
                {selectedGrowingRegionsDetails.map((eachRegion, index) => {
                  return (
                    <>
                      <td key={`eachRegion ${index}`}>{eachRegion}</td>
                    </>
                  );
                })}
              </tr>
            </tbody>
          </Table>
        </>
      )}
      {marketPrice && (
        <>
          <h6 style={{ color: "red" }}>Market Price Details:</h6>
          <Table striped bordered hover ref={marketPriceRef}>
            <tbody>
              <tr>
                <td>Local Market Price:</td>
                <td>{localMarket}</td>
              </tr>
              <tr>
                <td>Super Market Price:</td>
                <td>{superMarket}</td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
      {marketAvailability && (
        <>
          <h6 style={{ color: "red" }}>Market Availability Details:</h6>
          <Table striped bordered hover ref={marketAvailabilityRef}>
            <tbody>
              <tr>
                <td>Local Market Availability:</td>
                <td>
                  {localMarketAvailability ? "Available" : "Not Available"}
                </td>
              </tr>
              <tr>
                <td>Super Market Availability:</td>
                <td>
                  {superMarketAvailability ? "Available" : "Not Available"}
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default MoreDetails;
