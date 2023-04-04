import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserDetail from "../components/UserDetail";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailsUser() {
  const params = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    async function makeRequest() {
      try {
        let config = {
          method: "get",
          url: `https://reqres.in/api/users/${params.id}`,
        };
        const response = await axios.request(config);

        const { data } = response.data;
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  }, [params]);

  return (
    <Container className="my-4">
      <Row className="text-center mb-2">
        <Col>
          <h2>Details User of ....</h2>
        </Col>
      </Row>
      <Row>
        <UserDetail
          avatar={user.avatar}
          email={user.email}
          firstName={user.first_name}
          lastName={user.last_name}
        />
      </Row>
    </Container>
  );
}

export default DetailsUser;
