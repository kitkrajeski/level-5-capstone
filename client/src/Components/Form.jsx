import React, { useState } from "react";

function Form(props) {
  const initState = { username: "", password: "" };

  const [formData, setFormData] = useState(initState);

  const { isMember, submit, errMsg } = props;

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    submit(formData);
    setFormData(initState);
  }

  return (
    <form
      className="auth--form"
      name="auth-form"
      id="auth-form"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="auth--form main--button">
        {isMember ? "Login" : "Signup"}
      </button>
      <p style={{ color: "red" }}>{errMsg}</p>
    </form>
  );
}

export default Form;
