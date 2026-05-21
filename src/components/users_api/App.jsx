import { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
import Loader from "./Loader";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // A partir del año 2015, vino una funcionalidad nueva para trabajar con promesas.
  // Esta se llama ASYNC/AWAIT

  const getData = async () => {
    const ENDPOINT = "http://localhost:5000/users";

    try {
        setIsLoading(true);

        const { data } = await axios.get(ENDPOINT);
        setUsers(data);

        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {!isLoading && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              height: "100%",
            }}
          >
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        )}
        {isLoading && <Loader />}
      </section>
    </>
  );
};

export default App;
