import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Feed({ LogOut }) {
  const time = () => {
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    const d = new Date();
    const h = addZero(d.getHours());
    const m = addZero(d.getMinutes());
    const s = addZero(d.getSeconds());
    return `${h}:${m}:${s}`;
  };
  return (
    <Container>
      <div className="feed-container">
        <Row className="justify-content-end">
          <button className="btn btn-success m-3" onClick={LogOut}>
            logout
          </button>
        </Row>
        <div className="table-responsive-sm bg-light">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Majors</th>
                <th scope="col">Price</th>

                <th scope="col">Year</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">EURUSD</th>
                <td>1.18248</td>
                <td>4.88%</td>
                <td>{time()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
