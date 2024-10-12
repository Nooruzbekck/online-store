import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setEmail("");
    setPassword("");
  };

  return (
    <StyleForm onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="Email..."
      />
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Password..."
      />
      <button type="submit">Войти</button>
    </StyleForm>
  );
};

export default Login;

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
