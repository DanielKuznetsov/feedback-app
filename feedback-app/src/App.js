import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  async function getPets() {
    try {
      const pets = await axios.get("http://localhost:4000/api/v1/pets");
      // console.log(pets.request)
      setData(pets.data);


      console.log(data);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async function loginPets() {
    try {
      const pets = await axios({
        method: "POST",
        url: "http://localhost:4000/api/v1/pets/login",
        data: {
          email: "theo@example.com",
          password: "teddytheo",
          withCredentials: true,
        },
      });

      console.log(JSON.parse(pets.request.response).token)

      setData(pets);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <div className="App">
      <button onClick={loginPets}>CLICK TO LOGIN</button>
      <button onClick={getPets}>CLICK TO GET USERS</button>
      {/* {data ? data : "Loading..."} */}
    </div>
  );
}

export default App;
