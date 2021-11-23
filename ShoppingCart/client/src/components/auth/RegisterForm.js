import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <Form.Control
            style={{ marginTop: 1 + "em" }}
            className="col-"
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
        <FormGroup>
          <Form.Control
            style={{ marginTop: 1 + "em" }}
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            required
          ></Form.Control>
        </FormGroup>
        <Button style={{ marginTop: 1 + "em" }} variant="success" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account?
        <Link to="/login">
          <Button
            variant="info"
            style={{ marginLeft: 1 + "em" }}
            size="small"
            className="ml-1"
          >
            Login
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
