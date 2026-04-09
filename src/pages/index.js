


const lista = [1, 2, 3, 4, 5]

export default function Home() {
  return (
    <>
      <ul>
        {lista.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}


