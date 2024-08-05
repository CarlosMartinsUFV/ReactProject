import React, { useState, useCallback, useContext } from "react";
import Header from "./Components/Header/Header";
import Input from "./Components/Forms/Input";
import Modal from "./Components/Modal/Modal";
import Button from "./Components/Forms/Button";
import {
  Select,
  ComponentOption,
  OptionsStatus,
  OptionsColaborador,
} from "./Components/Forms/Select";
import { UserContext } from "./UserContext.jsx";
import styles from "./Home.module.css";
import Table from "./Components/Tables/Table";

const Home = () => {
  const { modal } = useContext(UserContext);
  const [valorInput, setvalorInput] = useState("");

  const alterarValor = ({ target }) => {
    console.log(target.value);
    setvalorInput(target.value);
  };

  return (
    <>
      <section className={"animeLeft"}>
        <Header />
        <section className={`container ${styles.containerHome}`}>
          <div className={styles.containersFiltros}>
            <h3 className={styles.h3Filter}>Buscar empresas</h3>
            <Input
              value={valorInput}
              name={"cliente"}
              type={"text"}
              label={"Cliente"}
              placeholder={"Buscar pelo nome"}
              onChange={alterarValor}
            />
            <Input
              type={"date"}
              name={"dateCreate"}
              label={"Data criação início"}
            />
            <Input
              type={"date"}
              name={"dateCreateEnd"}
              label={"Data criação fim"}
            />
            <Select name={"status"} label={"Status"}>
              {OptionsStatus.map((status) => (
                <ComponentOption key={status}>{status}</ComponentOption>
              ))}
            </Select>
            <Select name={"colaborador"} label={"Colaborador"}>
              {OptionsColaborador.map((colaborador) => (
                <ComponentOption key={colaborador}>
                  {colaborador}
                </ComponentOption>
              ))}
            </Select>
            <div className={styles.containerButtons}>
              <Button id={"1"} border={"br1"} color={"c1"}>
                Limpar
              </Button>
              <Button variant={"gr"} color={"white"}>
                Pesquisar
              </Button>
            </div>
          </div>
          <Table />
        </section>
      </section>
      {modal ? <Modal /> : ""}
    </>
  );
};

export default Home;
