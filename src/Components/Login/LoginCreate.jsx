import React from "react";
import styles from "./LoginCreate.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/UseForm";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error.jsx";

import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }
  return (
    <section className={`animeLeft ${styles.containerCreater}`}>
      <h1 className={styles.titleLoginCreate}>Cadastre-se</h1>
      <form
        onSubmit={handleSubmit}
        className={`containerForm ${styles.containerCreater}`}
      >
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button variant={"gr"}>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
