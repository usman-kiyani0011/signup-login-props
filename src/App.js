import { useState } from "react";
import Signup from "./components/Signup";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { Button } from "react-bootstrap";

function App() {
  const usersData = [
    {
      name: "test 1",
      email: "test@mail.com",
      password: "123",
    },
    {
      name: "test 2",
      email: "test2@mail.com",
      password: "123",
    },
  ];

  const [users, setUsers] = useState(usersData);

  function addUsers(val) {
    setUsers((preData) => ({
      ...preData,
      val,
    }));
  }
  console.log(users);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button className="btn-lg m-4" variant="outline-success">
          <Link to="/login"> Log in</Link>
        </Button>
        <Button className="btn-lg m-4" variant="outline-warning">
          <Link to="/signup">Sign up</Link>
        </Button>
      </div>
      <Routes>
        <Route exact path="/signup" element={<Signup addUsers={addUsers} />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
