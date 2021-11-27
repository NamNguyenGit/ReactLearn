import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const LoginForm = () => {
  //Context
  const { loginuser } = useContext(AuthContext);

  const [LoginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...LoginForm, [event.target.name]: event.target.value });

  const { username, password } = LoginForm;

  // const login = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const loginData = await loginuser(LoginForm);
  //     console.log(loginData);
  //   } catch (error) {
  //
  //   }
  // };
  const login = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginuser(LoginForm);
      return console.log(loginData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={login}>
        <FormGroup>
          <Form.Control
            style={{ marginTop: 1 + "em" }}
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          ></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Control
            style={{ marginTop: 1 + "em" }}
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
          ></Form.Control>
        </FormGroup>
        <Button style={{ marginTop: 1 + "em" }} variant="success" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Don't have an account?
        <Link to="/register">
          <Button
            variant="info"
            style={{ marginLeft: 1 + "em" }}
            size="small"
            className="ml-1"
          >
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
