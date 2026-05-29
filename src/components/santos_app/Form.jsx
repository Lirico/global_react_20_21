import {useState, useEffect} from "react";


const initialForm = {
  name: "",
  constellation: "",
  id: null
};

const Form = ({createSanto, updateSanto, dataToEdit}) => {
    const [form, setForm] = useState(initialForm)

    // Si dataToEdit cambia de null a un santo, quiero reempalzar el estado del form por ese santo
    useEffect(() => {
        if(dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm(initialForm);
        }

    }, [dataToEdit]) 

    // Manejar un evento de onChange
    const handleChange = (event) => {
        setForm((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    // Manejar un evento de onSubmit
    const handleSubmit = (event) => {
        event.preventDefault();

        if(!form.name || !form.constellation) {
            alert("Todos los campos son obligatorios");
            return;
        }

        if(form.id === null) {
            createSanto(form);
        } else {
            updateSanto(form);
        }

        handleReset();
    }

    // Manejar un evento de onClick
    const handleReset = () => {
        setForm(initialForm);
    }

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
        <input type="text" name="constellation" placeholder="constellation" onChange={handleChange} value={form.constellation} />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default Form;

