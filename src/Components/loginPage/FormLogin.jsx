import React from "react";
import { Form, Button } from "react-bootstrap";
export default function FormLogin({
  handleChange,
  validated,
  handleSubmit,
  theme,
  setModal,
}) {
  return (
    <Form
      noValidate
      validated={validated}
      className="h-100"
      onSubmit={handleSubmit}
    >
      <Form.Group className="mt-2" controlId="ckLoginEmail">
        <Form.Control
          onChange={handleChange}
          type="email"
          placeholder="Example@gmail.com"
          name="email"
          className={theme ? "inputDay inputCommon" : " inputNight inputCommon"}
          required
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please enter a valid email
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="my-3" controlId="ckLoginPassword">
        <Form.Control
          onChange={handleChange}
          type="password"
          placeholder="Password"
          minLength="6"
          name="password"
          className={theme ? "inputDay inputCommon" : " inputNight inputCommon"}
          required
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please enter a valid password
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="d-flex justify-content-around-res-log align-items-center">
        <Button className="mt-1 col-10 btnRegist " type="submit">
          Login
        </Button>
      </Form.Group>
      {/* <Form.Group className="d-flex justify-content-around-res-log align-items-center">
        <Button className="mt-1 col-10 btnRegist">
          Regist
        </Button>
      </Form.Group> */}
      <button className="mt-5 btn" type="button" onClick={() => setModal(true)}>
        Forgot your password?
      </button>
    </Form>
  );
}
