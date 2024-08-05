import { useTable, useFilters, useSortBy } from "react-table";
import styles from "./Tables.module.css";
import { useNavigate } from "react-router-dom";

function TableColumns({ columns, data }) {
  const navigate = useNavigate();

  // Utilizando o hook useTable e passando as colunas com os dados.
  // É retornado para a gente todas as informações necessárias para
  // montar a tabela.
  const {
    getTableProps, // propriedades da tabela
    getTableBodyProps, // propriedades do corpo da tabela
    headerGroups, // os valores de agrupamento de tabela, caso sua tabela use
    rows, // linhas da tabela baseado nos dados e colunas
    prepareRow, // Prepara a linha (Essa função deve ser chamada para cada linha)
  } = useTable({
    columns,
    data,
  });

  function click({ target }) {
    if (target.innerText === "Ir para") navigate("/detalhes");
  }

  return (
    <>
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className={styles.tdHead} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tbody} {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr className={styles.tRow} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <td
                      className={styles.tdCells}
                      {...cell.getCellProps()}
                      onClick={click}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default TableColumns;
