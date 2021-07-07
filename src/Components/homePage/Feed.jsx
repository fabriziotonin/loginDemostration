import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useUser } from "../../Context/UserContext";
import TableFeed from "./TableFeed";

export default function Feed({ LogOut }) {
  const [feedData, setFeedData] = useState([]);
  const { getFeed } = useUser();
  useEffect(() => {
    getFeed(setFeedData);
  }, []);
  console.log("asd", feedData);

  return (
    <Container>
      <div className="feed-container">
        <Row className="justify-content-end">
          <button className="btn btn-success m-3" onClick={LogOut}>
            logout
          </button>
        </Row>
        <div className="table-responsive-sm bg-light">
          <TableFeed feedData={feedData} />
        </div>
      </div>
    </Container>
  );
}
