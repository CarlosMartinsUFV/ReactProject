import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error.jsx";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { UserContext } from "../../UserContext.jsx";
import Brand from "./brand.svg";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <form className="containerForm" action="" onSubmit={handleSubmit}>
        <div>
          <img style={{ width: "100%" }} src={Brand} alt="Logotipo do App" />
        </div>
        <div style={{ marginTop: "3rem" }}>
          <h1 className={styles.title}>
            Sistema de Gerenciamento de Processos
          </h1>
          <div className={styles.containerInputs}>
            <Input
              id="usuario"
              type="text"
              name="username"
              placeholder="Nome de usuário"
              value={username}
              {...username}
            />
            <Input
              id="senha"
              type="password"
              value={password}
              name="senha"
              placeholder="Senha"
              {...password}
            />
          </div>
          <div className={styles.formsInit}>
            {loading ? (
              <Button disabled variant={"gr3"}>
                Carregando...
              </Button>
            ) : (
              <Button variant={"gr"}>Começar</Button>
            )}
            {loading ? (
              <Button disabled></Button>
            ) : (
              <Link to="/Criar">
                <Button variant={"gr3"}>Criar Usuário</Button>
              </Link>
            )}
          </div>
          <Error error={error} />{" "}
          <div className={styles.links}>
            <Link to="/recuperar">
              {" "}
              <p style={{ right: "0" }}> Esqueci minha senha</p>{" "}
            </Link>{" "}
          </div>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
