import React from "react";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import LoginRecuperar from "./LoginRecuperar.jsx";
import LoginCreate from "./LoginCreate.jsx";
import LoginResetar from "./LoginResetar";
import { Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className={`animeLeft ${styles.login}`}>
        {" "}
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="criar" element={<LoginCreate />}></Route>
          <Route path="recuperar" element={<LoginRecuperar />}></Route>
          <Route path="resetar" element={<LoginResetar />}></Route>
        </Routes>
      </section>
    </>
  );
};

export default Login;
