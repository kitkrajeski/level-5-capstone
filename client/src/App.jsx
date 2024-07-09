import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Houses from "./Components/Houses";
import Auth from "./Components/Auth";
import Form from "./Components/Form";
import Profile from "./Components/Profile";
import { HouseContext } from "./context/HouseProvider";

function App() {
  const { userState } = useContext(HouseContext);

  return (
    <>
      <Hero />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/houses"
          element={userState.token ? <Houses /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={userState.token ? <Profile /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
