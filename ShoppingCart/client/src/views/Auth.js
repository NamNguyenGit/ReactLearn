import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Redirect } from "react-router";
import Spinner from "react-bootstrap/Spinner";

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = (
      <div className=" d-flex justify-content-center mt-2 ">
        <Spinner animation="border" variant="inf0" />
      </div>
    );
  else if (isAuthenticated) return <Redirect to="/home" />;
  else
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1> Make your own Style</h1>
          <h4> Where hairdressing is holistic.</h4>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Auth;
