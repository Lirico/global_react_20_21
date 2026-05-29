import {useState} from "react";
import Form from "./Form";
import Table from "./Table";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andromeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fenix",
  },
];

const App = () => {
  /* 
        C -> CREATE (POST)
        R -> READ (GET)
        U -> UPDATE (PUT)
        D -> DELETE (DELETE)
    */
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const getSantos = async () => {} // GET al backend

    const createSanto = async (formData) => {
        console.log(formData);
    } // POST al backend

    const updateSanto = async (formData) => {} // PUT al backend

    const deleteSanto = async (santo) => {} // DELETE al backend

  return (
    <div>
      <h2>CRUD App</h2>
      <Form createSanto={createSanto} updateSanto={updateSanto} dataToEdit={dataToEdit}/>
      <br />
      <Table db={db} deleteSanto={deleteSanto} setDataToEdit={setDataToEdit}/>
    </div>
  );
};

export default App;
