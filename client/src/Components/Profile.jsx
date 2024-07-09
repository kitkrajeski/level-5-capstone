import React, { useContext, useEffect } from "react";
import { HouseContext } from "../context/HouseProvider";
// import UserHouseList from "./UserHouseList";
import UserHousesList from "./UserHouseList";
import UserHouse from "./UserHouse";

function Profile() {
  const { userState, userHouses, getFavorites } = useContext(HouseContext);
  useEffect(() => {
    if (userState.user.username) {
      getFavorites();
    }
  }, [userState.user]);
  return (
    <div className="profile">
      <h1>Welcome to Your Database, {userState.user.username}</h1>
      <h3>Customize Your Favorite Houses Here!</h3>
      {/* <p>{JSON.stringify(userHouses, null, 2)}</p> */}
      <UserHousesList
        userHouses={userHouses}
        // renderItem={(userHouse) => (
        //   <UserHouse key={userHouse._id} userHouse={userHouse} />
        // )}
      />
      {/* <UserHouse /> */}
    </div>
  );
}

export default Profile;
