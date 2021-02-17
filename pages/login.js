import { Button, Form } from "react-bootstrap";
import loginStyle from "../styles/Login.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const { register: registerLogin, handleSubmit: handleSubmitLogin, errors: errorsLogin } = useForm();
  const { register: registerReset, handleSubmit: handleSubmitReset, errors: errorsReset } = useForm();

  const handleForgetPassword = () => {
    setIsForgetPassword(!isForgetPassword);
  };

  const onLoginFormSubmit = (data) => {
    console.log(data);
    console.log(errorsLogin);
  }

  const onResetFormSubmit = (data) => {
    console.log(data);
    console.log(errorsReset);
  }

  console.log(errorsLogin);
  console.log(errorsReset);

  return (
    <div className={loginStyle.auth_wrap}>
      <div className={loginStyle.auth_container}>
        <div className={loginStyle.auth_header}>
          <h3 className={loginStyle.title}>B2B</h3>
          {/* <img
            className={loginStyle.logo}
            src={""}
            alt="b2b"
            style={{ height: "80px" }}
          /> */}
          {!isForgetPassword ? (
            <>
              <h4 className={loginStyle.auth_title}>Login</h4>
              <p>to continue to admin panel</p>
            </>
          ) : (
            <>
              <h4 className={loginStyle.auth_title}>Reset Password</h4>
              <p>Enter your registered email address</p>
            </>
          )}
        </div>

        <div className={loginStyle.auth_body}>
          {!isForgetPassword ? (
            <Form onSubmit={handleSubmitLogin(onLoginFormSubmit)}>
              <Form.Group controlId="loginForm.email">
                <Form.Label className="sr-only">Email</Form.Label>
                <Form.Control
                  ref={registerLogin({ required: {value: true, message: "Email is required"} })}
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
                {errorsLogin.email && <span className="text-danger">{errorsLogin.email.message}</span>}
              </Form.Group>
              
              <Form.Group controlId="loginForm.password">
                <Form.Label className="sr-only">Password</Form.Label>
                <Form.Control
                  ref={registerLogin({ required: {value: true, message: "Password is required"} })}
                  defaultValue=""
                  name={`password`}
                  type="password"
                  placeholder="Password"
                />
                {errorsLogin.password && <span className="text-danger">{errorsLogin.password.message}</span>}
              </Form.Group>
              <span
                onClick={handleForgetPassword}
                className="d-block text-primary mb-3"
              >
                Forget your password?
              </span>
              <Button
                variant="primary"
                type={`submit`}
                disabled={isSubmitting}
                block
              >
                {isSubmitting ? "Logging..." : "login"}
              </Button>
            </Form>
          ) : (
            <Form onSubmit={handleSubmitReset(onResetFormSubmit)}>
              <Form.Group controlId="loginForm.email">
                <Form.Label className="sr-only">Email</Form.Label>
                <Form.Control
                  ref={registerReset({ required: {value: true, message: "Email is required"} })}
                  type="email"
                  name="email"
                  placeholder="Enter your registered email address"
                />
                {errorsReset.email && <span className="text-danger">{errorsReset.email.message}</span>}
              </Form.Group>
              <Button type="submit" variant={isSubmitting ? "secondary" : "primary"} block>
                {isSubmitting ? "Submitting..." : "Reset Password"}
              </Button>
              <Button
                variant="link"
                onClick={() => setIsForgetPassword(false)}
                block
              >
                <FiArrowLeft /> Back to Login
              </Button>
            </Form>
          )}
        </div>

        <div className={`${loginStyle.auth_footer} text-center`}>
          &copy; 2020 Shopoth. All right reserved
        </div>
      </div>
    </div>
  );
};

export default Login;
