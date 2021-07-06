import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import FormLogin from "./FormLogin";
import MyModal from "../../Helpers/MyModal";
import ResetPassword from "../resetPassword/ResetPassword";
import { useUser } from "../../Context/UserContext";
import auth from "../../Helpers/auth";

export default function LoginPage() {
  const [validated, setValidated] = useState(false);
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });
  const [openModal, setModal] = useState();
  const { theme, setUser } = useUser();
  const history = useHistory();
  useEffect(() => {}, [inputLogin]);

  const handleChange = (event) => {
    setInputLogin({
      ...inputLogin,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(event) {
    console.log(inputLogin);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (
      inputLogin.email === "" ||
      inputLogin.password === "" ||
      inputLogin.password <= 6
    ) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
      console.log("==========");

      return;
    }
    setValidated(true);
    if (form.checkValidity()) {
      event.preventDefault();
    }
    console.log("asdasd");
    auth.login(() => {
      setUser(inputLogin);
      history.push("/");
    });
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
                        <FormLogin
                          validated={validated}
                          handleSubmit={handleSubmit}
                          handleChange={handleChange}
                          theme={theme}
                          setModal={setModal}
                        />
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
      {openModal && (
        <MyModal>
          <ResetPassword setModal={setModal} />
        </MyModal>
      )}
    </div>
  );
}
