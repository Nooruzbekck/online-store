import React, { useContext, useState } from "react";
import styled from "styled-components";
import { RouteContext } from "../../context/RouteContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { onPathChange } = useContext(RouteContext);

  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordPattern.test(password)) {
      setError(
        "пароль должен быть не менее 6 символов содержать латинские заглавные буквы строчные буквы и цифры"
      );
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    onPathChange("/");
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <>
      <Styled>Вход</Styled>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Логин
          <br />
          <StyledInput
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Введите логин "
          />
        </label>

        <label>
          Пароль
          <br />
          <StyledInput
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Введите пароль"
          />
        </label>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <StyledButton type="submit">Войти</StyledButton>
        <StyledP>или</StyledP>
        <p>зарегистрироваться</p>
        <StyledPi>Забыли пароль?</StyledPi>
      </StyledForm>
    </>
  );
};

export default Login;

const ErrorMessage = styled.p`
  color: red;
`;

const StyledInput = styled.input`
  height: 50px;
  width: 408px;
  padding-left: 15px;
  font-size: 16px;
  margin-top: 8px;
`;

const Styled = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 173px;
  font-size: 36px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 23px;
`;

const StyledButton = styled("button")`
  width: 408px;
  height: 50px;
  background-color: #4a4c6c;
  color: #fff;
  font-size: 20px;
`;

const StyledP = styled("p")`
  color: #6a6a6a;
  font-size: 16px;
`;

const StyledPi = styled("p")`
  font-size: 16px;
  font-weight: 600;
`;
