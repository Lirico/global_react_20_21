import React from "react";
import TableRow from "./TableRow";


const Table = ({db, deleteSanto, setDataToEdit}) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                db.length === 0 && (
                    <tr>
                        <td colSpan="3">Sin datos</td>
                    </tr>
                )
            }
            {
                db.length !== 0 && db.map((santo) => <TableRow key={santo.id} santo={santo} deleteSanto={deleteSanto} setDataToEdit={setDataToEdit}  />)
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
