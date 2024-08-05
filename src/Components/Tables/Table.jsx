import { useMemo, useContext } from "react";
import Button from "../Forms/Button";
import styles from "./Tables.module.css";
import TableColumns from "./TableColumns";
import { UserContext } from "../../UserContext.jsx";
// import { useTable, usePagination } from "react-table";

function Table() {
  const { modal, setModal, dataTable } = useContext(UserContext);

  const columns = useMemo(
    () => [
      {
        // Primeiro grupo - Informações do passageiro
        Header: "Informações da Empresa",
        // Colunas do primeiro grupo
        columns: [
          {
            Header: "Data de Registro",
            accessor: "dataRegistro",
          },
          {
            Header: "Nome",
            accessor: "name",
          },
          {
            Header: "CNPJ",
            accessor: "CNPJ",
          },
          {
            Header: "Data de Abertura",
            accessor: "dataAbertura",
          },
          {
            Header: "Colaborador responsável",
            accessor: "colaborador",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Ações",
            accessor: "acao",
          },
        ],
      },
    ],
    []
  );

  function onClick() {
    setModal(!modal);
  }
  console.log(dataTable);
  return (
    <>
      <div className={styles.table}>
        {" "}
        <Button onClick={onClick} variant={"gr"} color={"white"}>
          +
        </Button>{" "}
      </div>
      <div className="App">
        <TableColumns columns={columns} data={dataTable} />
      </div>
    </>
  );
}

export default Table;
