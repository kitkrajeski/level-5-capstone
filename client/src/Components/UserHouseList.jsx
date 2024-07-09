import { useContext, useState } from "react";
import { HouseContext } from "../context/HouseProvider";
import Profile from "./Profile";
import UserHouse from "./UserHouse";

// export default function UserHouseList(props) {
//   console.log(userHouses);

//   return (
//     <ul>
//       {userHouses.map((userHouse) => (
//         <UserHouse key={userHouse._id} userHouse={userHouse} />
//       ))}
//     </ul>
//   );
// }

export default function UserHouseList(props) {
  const { userHouses } = props;
  console.log(userHouses);

  // console.log(house);
  // return <ul>{userHouses.map(house)}</ul>;

  return (
    <div>
      {userHouses && userHouses.length > 0 ? (
        userHouses.map((house) => (
          <UserHouse key={house._id} userHouse={house} />
        ))
      ) : (
        <p>No houses found</p>
      )}
    </div>
  );
}
