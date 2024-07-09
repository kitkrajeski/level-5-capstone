import { HouseContext } from "../context/HouseProvider";
import { useContext } from "react";

export default function UserHouse(props) {
  const { userHouse } = props;
  const { removeFavorite } = useContext(HouseContext);
  console.log(userHouse);

  function handleRemoveFavorite() {
    removeFavorite(userHouse._id);
  }
  // return <li>{renderItem}</li>;
  return (
    <div className="user-houses houses--background">
      <ul>
        <h1 className="user-houses houses--info">{userHouse.house.name}</h1>
        <h1 className="user-houses houses--info">{userHouse.house.region}</h1>
        <h1 className="user-houses houses--info">{userHouse.house.words}</h1>
        <img
          className="user-houses houses--crests coat-of-arms"
          src={`/api/images/${userHouse.house.crest}`}
        />
      </ul>
      <button onClick={handleRemoveFavorite} className="main--button">
        Remove Favorite
      </button>
    </div>
  );
}
