import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = ({ addUsers }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      setError(true);
    } else {
      setError(false);
      addUsers(formData);
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5">Sign up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mt-4">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter fullname"
          />
        </Form.Group>
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
        <Form.Group className="mb-3">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        {error ? <p style={{ color: "red" }}>Password do not match</p> : ""}
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
