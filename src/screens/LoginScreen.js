import React, { useState } from "react";
import { Container, Button, Form, Navbar, Nav } from "react-bootstrap";
import ButtonComponent from "../components/ButtonComponent";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
axios.defaults.withCredentials = true;

function LoginScreen() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Login handle

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/login", user);
      const token = res.data.token;

      if (res.status === 400 || !res.data) {
        window.alert("Invalid Credentials");
      } else if (res.status === 201) {
        Cookies.set("Token", token); // Creating Cookie
        dispatch({ type: "LOGGED_IN" });
        history.push("/main");
      }
      
    } catch (error) {
      if (error.message.includes(400)) {
        window.alert("Fill all the details");
      } else if (error.message.includes(403) || error.message.includes(500)) {
        window.alert("Invalid Credentials");
      }
    }
  };

  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Container className="justify-content-center text-blue">
          <Nav.Item>
            <h1>Bapple</h1>
          </Nav.Item>
        </Container>
        <ButtonComponent link={"/"} text={"Go back"} />
      </Navbar>
      <Container className="formP">
        <Form className="form">
          <Form.Group className="form-group">
            <Form.Floating className="form-floating mb-3">
              <Form.Control
                type="text"
                className="form-control"
                id="floatingName"
                name="email"
                value={user.email}
                placeholder="Name"
                onChange={handleChange}
              />
              <Form.Label htmlFor="floatingInput">Email</Form.Label>
            </Form.Floating>
            <Form.Floating className="form-floating mb-3">
              <Form.Control
                type="password"
                className="form-control"
                id="floatingSir"
                name="password"
                value={user.password}
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <Form.Label htmlFor="floatingInput">Password</Form.Label>
            </Form.Floating>
          </Form.Group>
          <Button
            className="btn btn-secondary ms-10 bg-light text-black"
            type="submit"
            onClick={loginUser}
          >
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default LoginScreen;
