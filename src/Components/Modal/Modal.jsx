import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import styles from "./Modal.module.css";
import { UserContext } from "../../UserContext";
import { Select, ComponentOption, OptionsColaborador } from "../Forms/Select";

const Modal = () => {
  const { modal, setModal, dataTable, setDataTable } =
    React.useContext(UserContext);

  const [errorCreate, setErrorCreate] = React.useState(false);
  const [cnpj, setcnpj] = React.useState("");
  const [razaoSocial, setRazaoSocial] = React.useState("");
  const [dataAbertura, setdataAbertura] = React.useState(false);
  const [dataColaborador, setdataColaborador] = React.useState("-");
  const [status, setStatus] = React.useState("");
  const [acao, setAcao] = React.useState("X");

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  function onClick() {
    //abrir ou fechar modal
    setModal(!modal);
  }

  function onClickOut({ target }) {
    //fechar modal clicando do lado de fora
    if ({ target }["target"].className.includes("Container")) setModal(!modal);
  }

  // adicionar dados e fechar modal. UseEffect no UserContext

  const alterarValores = {
    changeValorCNPJ: ({ target }) => {
      setcnpj(target.value);
    },
    changeValorRazaoSocial: ({ target }) => {
      setRazaoSocial(target.value);
    },
    changeValorDatadeAbertura: ({ target }) => {
      console.log(target.value);
      setdataAbertura(target.value);
    },
    changeValordataColaborador: ({ target }) => {
      console.log(target.value);
      setdataColaborador(target.value);
    },
  };

  function onClickCreate() {
    if (!cnpj || !razaoSocial || !dataAbertura || dataColaborador === "-") {
      setErrorCreate(true);
      return;
    }

    if (cnpj && razaoSocial && dataColaborador.length > 1) {
      setDataTable([
        ...dataTable,
        {
          _id: "3",
          dataRegistro: `${today.toLocaleDateString()}  ${today.toLocaleTimeString()}
         `,
          name: razaoSocial,
          CNPJ: cnpj,
          dataAbertura: dataAbertura.split("-").reverse().join("/"),
          colaborador: dataColaborador,
          status,
          acao,
        },
      ]);
      setModal(!modal);
    }
  }

  function construir() {
    if (cnpj.length >= 14) {
      setcnpj(
        cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5")
      );

      return cnpj;
    } else {
      let cnpjFormat = cnpj.padStart(14, "0");
      setcnpj(
        cnpjFormat.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
          "$1.$2.$3/$4-$5"
        )
      );
    }
  }

  return (
    <div className={styles.modalContainer} onClick={onClickOut}>
      <div className={styles.modal}>
        <span onClick={onClick} className={styles.fechar}>
          X
        </span>
        <div>
          <Input
            value={cnpj}
            placeholder="__.___.___/__"
            label="CNPJ"
            onChange={alterarValores["changeValorCNPJ"]}
            onBlur={construir}
          />
          <Input
            value={razaoSocial}
            label="Razão Social"
            onChange={alterarValores["changeValorRazaoSocial"]}
          />
          <Input
            value={dataAbertura}
            label="Data de Abertura"
            type="date"
            onChange={alterarValores["changeValorDatadeAbertura"]}
          />
          <Select
            onChange={alterarValores["changeValordataColaborador"]}
            name={"colaborador"}
            label={"Colaborador"}
          >
            {OptionsColaborador.map((colaborador) => {
              return (
                <ComponentOption key={colaborador}>
                  {colaborador}
                </ComponentOption>
              );
            })}
            ]]
          </Select>{" "}
          <Button onClick={onClickCreate} variant={"gr"}>
            Cadastrar
          </Button>
          {errorCreate ? (
            <p style={{ color: "red" }}>Preencha todos os campos</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
