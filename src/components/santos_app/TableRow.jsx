




import React from 'react'

const TableRow = ({santo, deleteSanto, setDataToEdit}) => {

    const {name, constellation} = santo;
    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button onClick={() => setDataToEdit(santo)}>Editar</button>
                <button onClick={() => deleteSanto(santo)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default TableRow