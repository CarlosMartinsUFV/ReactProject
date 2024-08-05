import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [dataTable, setDataTable] = React.useState([
    {
      _id: "1",
      name: "Empresa teste1",
      CNPJ: "25021140000177",
      dataAbertura: "15/02/2022",
      acao: "Ir para",
    },
    {
      _id: "2",
      name: "Empresa teste2",
      CNPJ: "26021140000277",
      dataAbertura: "26/03/2022",
      acao: "Ir para",
    },
  ]);

  // React.useEffect(() => {
  //   console.log(dataTable);
  // }, [dataTable]);

  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/");
    },
    [navigate]
  );

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  React.useEffect(() => {
    // Fazer o login automaticamente
    async function autoLogin() {
      const token = window.localStorage.getItem("token"); //busca o token no localStorage
      if (token) {
        //se existir, faça:
        try {
          setError(null); // Iniciar o erro como null
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token Inválido"); // caso a resposta seja false, error
          await getUser(token); //inicia a função de login
        } catch (err) {
          userLogout(); //resetar tudo
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, []);

  async function userLogin(username, password) {
    try {
      setError(null); // Iniciar o erro como null
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`); // pegue a mensagem do erro

      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/home");
    } catch (err) {
      setError(err.message); //seta a mensagem do erro anterior
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        data,
        userLogout,
        error,
        loading,
        login,
        modal,
        setModal,
        dataTable,
        setDataTable,
      }}
    >
      {" "}
      {children}
    </UserContext.Provider>
  );
};
