import React from "react";
import Auth from "./Auth";

function Home() {
  return (
    <>
      <div className="home red--background">
        <h1 className="home--title">THE HOUSES OF WESTEROS</h1>
        <h1 className="home--description">
          Discover an ancient family from the World of A Song of Ice and Fire
        </h1>
        <h1 className="home--author">By: Kit Krajeski</h1>
      </div>
      <div>
        <Auth />
      </div>
    </>
  );
}

export default Home;
