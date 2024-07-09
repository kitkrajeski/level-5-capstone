import React, { useEffect, useContext } from "react";
import { HouseContext } from "../context/HouseProvider";

function Houses() {
  // const {house, getRandomHouse} = useHouseContext()
  const {
    house,
    getRandomHouse,
    handleFavorite,
    user,
    userState,
    userHouses,
    setUserHouses,
  } = useContext(HouseContext);

  useEffect(() => {
    getRandomHouse();
  }, []);
  const handleGetRandomHouse = () => {
    getRandomHouse();
  };
  return (
    <div className="houses houses--background">
      <button className="houses main--button" onClick={handleGetRandomHouse}>
        Get New House
      </button>
      {house ? (
        <>
          <h1 className="houses--info">{house.name}</h1>
          <h1 className="houses--info">{house.region}</h1>
          {house.words && (
            <h2 className="houses--info">{`'${house.words}'`}</h2>
          )}
          <img className="houses--crests" src={`/api/images/${house.crest}`} />
        </>
      ) : (
        <div>No house yet</div>
      )}
      <button
        className="houses main--button"
        onClick={() => handleFavorite(house.name)}
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default Houses;
