import { useState } from "react";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  const usersData = [
    {
      name: "user",
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
  const [validLogin, setValidLogin] = useState(false);

  function addUsers(val) {
    setUsers((preData) => ({
      ...preData,
      val,
    }));
  }
  console.log(users);

  return (
    <div>
      {!validLogin ? <Header validLogin={validLogin} /> : ""}
      <Routes>
        <Route path="/signup" element={<Signup addUsers={addUsers} />} />
        <Route
          path="/login"
          element={<Login users={users} setValidLogin={setValidLogin} />}
        />
        <Route path="/home" element={<Home validLogin={validLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
