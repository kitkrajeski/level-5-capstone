import { createContext, useContext, useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const HouseContext = createContext();
const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// const useHouseApi = () => {
//   const [house, setHouse] = useState("");

//   const getRandomHouse = async () => {
//     try {
//       const response = await axios.get(`/api/houses`);
//       const randomInt = Math.floor(Math.random() * response.data.length);
//       setHouse(response.data[randomInt]);
//     } catch (error) {
//       console.error("error fetching data:", error);
//     }
//   };

//   return {
//     house,
//     getRandomHouse,
//   };
// };

function HouseContextProvider(props) {
  // const userAxios = axios.create();

  // userAxios.interceptors.request.use((config) => {
  //   const token = localStorage.getItem("token");
  //   config.headers.Authorization = `Bearer ${token}`;
  //   return config;
  // });

  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    errMsg: "",
  };

  const navigate = useNavigate();

  const [userState, setUserState] = useState(initState);
  const [house, setHouse] = useState(null);
  const [userHouses, setUserHouses] = useState([]);

  async function signup(creds) {
    try {
      const res = await axios.post("/auth/signup", creds);
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUserState((prevUserState) => {
        return {
          ...prevUserState,
          user: user,
          token: token,
        };
      });
    } catch (error) {
      handleAuthError(error.response.data.errMsg);
    }
  }

  async function login(creds) {
    try {
      const res = await axios.post("/auth/login", creds);
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUserState((prevUserState) => ({
        ...prevUserState,
        user: user,
        token: token,
      }));
      navigate("/profile");
    } catch (error) {
      handleAuthError(error.response.data.errMsg);
    }
  }
  async function logout() {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUserState((prevUserState) => {
        return {
          ...prevUserState,
          user: {},
          token: "",
        };
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  function handleAuthError(errMsg) {
    setUserState((prevUserState) => {
      return {
        ...prevUserState,
        errMsg,
      };
    });
  }

  function resetAuthErr() {
    setUserState((prevUserState) => {
      return {
        ...prevUserState,
        errMsg: "",
      };
    });
  }

  const getRandomHouse = async () => {
    try {
      const response = await userAxios.get(`/api/houses`);
      const randomInt = Math.floor(Math.random() * response.data.length);
      setHouse(response.data[randomInt]);
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };

  async function handleFavorite(name) {
    // console.log(userId);
    try {
      const res = await userAxios.post("/api/profile", { house: name });
      setUserHouses((prevUserHouses) => {
        return [...prevUserHouses, res.data];
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getFavorites() {
    // get user houses
    try {
      const res = await userAxios.get("/api/profile/houses");
      setUserHouses(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function removeFavorite(userHouseId) {
    try {
      const res = await userAxios.delete(`/api/profile/${userHouseId}`);
      setUserHouses((prevUserHouses) => {
        return prevUserHouses.filter((userHouse) => {
          return userHouseId !== userHouse._id;
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    house,
    getRandomHouse,
    signup,
    resetAuthErr,
    login,
    logout,
    userState,
    handleFavorite,
    userHouses,
    getFavorites,
    removeFavorite,
    // useHouseApi,
  };

  return (
    <HouseContext.Provider value={value}>
      {props.children}
    </HouseContext.Provider>
  );
}

// const useHouseContext = useContext(HouseContext)

export { HouseContext, HouseContextProvider };
