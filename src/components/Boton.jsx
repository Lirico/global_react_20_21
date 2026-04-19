// Modulo es un archivo de programación que contiene una colección de funciones, variables y otros objetos
// que se pueden reutilizar en otros archivos de JavaScript.
// Creo un modulo, este modulo lo habilito para ser exportado y por lo tanto
// puedo importarlo en otros archivos.

const Boton = () => {
  return <button style={estilos}>Boton</button>;
};

export default Boton;

// Hay 2 formas de exportar...

// Forma 1 -> export default -> indica que solo se exportará un elemento.

// Forma 2 -> export {} -> indica que se exportarán varios elementos.

const estilos = {
  backgroundColor: "green",
  border: "none",
  borderRadius: "5px",
  color: "white",
  fontWeight: "bold",
  padding: "10px 20px",
};
