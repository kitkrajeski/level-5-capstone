import React, { useState, useContext } from "react";
import Form from "./Form";
import { HouseContext } from "../context/HouseProvider";

function Auth() {
  const { signup, login, errMsg, resetAuthErr } = useContext(HouseContext);

  const [isMember, setIsMember] = useState(false);

  const toggleIsMember = () => {
    setIsMember(!isMember);
    resetAuthErr();
  };

  return (
    <div className="auth--container ">
      <h3 className="auth--text">
        Create an Account to Start Building your Database!
      </h3>
      {isMember ? (
        <>
          <Form isMember={isMember} submit={login} errMsg={errMsg} />
          <button
            className="auth--container main--button"
            onClick={toggleIsMember}
          >
            Create an Account?
          </button>
        </>
      ) : (
        <>
          <Form isMember={isMember} submit={signup} errMsg={errMsg} />
          <button
            className="auth--container main--button"
            onClick={toggleIsMember}
          >
            Already a Member?
          </button>
        </>
      )}
    </div>
  );
}

export default Auth;
