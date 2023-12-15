import React from "react";
import comentaryIcon from "../../../assets/images/comentary-icon.svg";
import { dateFormateDbToView } from "../../../Utils/stringFunctions";
import ToggleSwitch from "../../../components/Toggle/Toggle";
// importa a biblioteca de tootips ()
import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip } from "react-tooltip";

// import trashDelete from "../../../assets/images/trash-delete.svg";
import "../../EventosAlunoPage/TableEvA/TableEvA.css";
import './TableDetalhe.css'

const TableDetalhe = ({ nomeEvento,descricao,dataEvento }) => {
  return (
    <table className="tbal-data">
      <thead className="tbal-data__head">
        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Evento
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Data
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Descrição
          </th>
         
        </tr>
      </thead>
      <tbody>
        
            <tr className="tbal-data__head-row" key={Math.random()}>
              <td className="tbal-data__data tbal-data__data--big">
                {nomeEvento}
              </td>

              <td className="tbal-data__data tbal-data__data--big tbal-data__btn-actions">
                
                {dataEvento}
              </td>

              <td className="tbal-data__data tbal-data__data--big tbal-data__btn-actions">
               {descricao}
              </td>
            </tr>
          
     
      </tbody>
    </table>
  );
};

export default TableDetalhe;
