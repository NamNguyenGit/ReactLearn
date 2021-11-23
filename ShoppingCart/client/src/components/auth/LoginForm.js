import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <Form.Control
            style={{ marginTop: 1 + "em" }}
            type="text"
            placeholder="Username"
            name="username"
            required
          ></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Control
            style={{ marginTop: 1 + "em" }}
            type="password"
            placeholder="Password"
            name="password"
            required
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
