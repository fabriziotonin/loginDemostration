import React from "react";

import { Form, Button } from "react-bootstrap";

export default function ResetPassword({ setModal }) {
  return (
    <div className="Modal">
      <div className="Modal__Container" style={{ top: 75 }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Forgot Your Password?
              </h5>
              <button
                onClick={() => setModal(false)}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Form noValidate className="h-100">
                <Form.Group className="mt-2" controlId="ckLoginEmail">
                  <Form.Control
                    type="email"
                    placeholder="Example@gmail.com"
                    name="email"
                    className="form-control"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="d-flex justify-content-around-res-log align-items-center">
                  <Button className="mt-1 col-10 btnLogin " type="submit">
                    Send me an email
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
