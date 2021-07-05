import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

export default function LoginPage() {
  const [validated, setValidated] = useState(false);
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });
  const { theme } = useUser();

  useEffect(() => {}, [inputLogin]);

  const handleChange = (event) => {
    setInputLogin({
      ...inputLogin,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (
      inputLogin.email === "" ||
      inputLogin.password === "" ||
      inputLogin.password >= 6
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
      event.preventDefault();
    }
  }

  return (
    <div className={theme ? "day" : "night"}>
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col xs={10}>
            <div className="card-login o-hidden border-0 my-5">
              <div className="card-body-login p-0">
                <Row className="same-height-sing">
                  <Col lg={6} className="d-lg-block bg-img">
                    <div className="bg-login-image"></div>
                  </Col>
                  <Col lg={6}>
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Wellcome to <b>ORTEX</b>
                        </h1>
                      </div>
                      <div>
                        <Form
                          noValidate
                          validated={validated}
                          className="h-100"
                          onSubmit={handleSubmit}
                        >
                          <Form.Group
                            className="mt-2"
                            controlId="validationCustom01"
                          >
                            <Form.Control
                              onChange={handleChange}
                              type="email"
                              placeholder="Example@gmail.com"
                              name="email"
                              className={
                                theme
                                  ? "inputDay inputCommon"
                                  : " inputNight inputCommon"
                              }
                              required
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Please enter a valid email
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            className="my-3"
                            controlId="validationCustom02"
                          >
                            <Form.Control
                              onChange={handleChange}
                              type="password"
                              placeholder="Password"
                              minLength="6"
                              name="password"
                              className={
                                theme
                                  ? "inputDay inputCommon"
                                  : " inputNight inputCommon"
                              }
                              required
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Please enter a valid password
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="d-flex justify-content-around-res-log align-items-center">
                            <Button
                              className="mt-1 col-10 btnLogin "
                              type="submit"
                            >
                              Entrar
                            </Button>
                          </Form.Group>
                          <Form.Group className="d-flex justify-content-around-res-log align-items-center">
                            <Button
                              className="mt-1 col-10 btnRegist"
                              as={Link}
                              to="/registadmin"
                            >
                              Regist
                            </Button>
                          </Form.Group>
                          <Link to="/reset-password">Fortgot password?</Link>
                        </Form>
                      </div>
                      <hr />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
