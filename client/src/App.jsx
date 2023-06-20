import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>
              {user.first_name}
              {user.last_name}
            </h3>
            <p>{user.age}</p>
            <p>{user.age}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
