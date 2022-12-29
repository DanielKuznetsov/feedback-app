import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  async function getPets() {
    try {
      const pets = await axios.get("http://localhost:4000/api/v1/pets", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log(pets.data);

      setData(pets.data);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async function loginPets() {
    try {
      const pets = await axios.post(
        "http://localhost:4000/api/v1/pets/login",
        {
          email: "theo@example.com",
          password: "teddytheo",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(JSON.parse(pets.request.response).token);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async function toSignout() {
    try {
      const pets = await axios.get(
        "http://localhost:4000/api/v1/pets/logout",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <div className="App">
      <button onClick={loginPets}>CLICK TO LOGIN</button>
      <button onClick={getPets}>CLICK TO GET USERS</button>
      <button onClick={toSignout}>CLICK TO SIGN OUT</button>
      {/* {data ? data : "Loading..."} */}
    </div>
  );
}

export default App;
