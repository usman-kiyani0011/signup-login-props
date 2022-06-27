import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ users, setValidLogin, validLogin }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setError(false);
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredUser = () =>
      users.find((user) => {
        console.log(
          "compaired data",
          formData.email,
          user.email,
          formData.password,
          user.password
        );
        console.log(
          formData.email === user.email && formData.password === user.password
        );
        return (
          formData.email === user.email && formData.password === user.password
        );
      });
    filteredUser();
    console.log(filteredUser());
    if (!filteredUser()) {
      setError(true);
    } else {
      setError(false);
      setValidLogin(true);
      navigate("/home");
    }
  };
  return (
    <div className="container">
      <h2 className="mt-5">Log in</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" c>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        {error ? (
          <p style={{ color: "red" }}>Email or password is incorrect</p>
        ) : (
          ""
        )}
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
