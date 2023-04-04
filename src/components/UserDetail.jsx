import React from "react";
import { Col, Card } from "react-bootstrap";

function UserDetail({ avatar, firstName, lastName, email }) {
  return (
    <Col>
      <div className="p-4">
        <Card>
          <Card.Img variant="top" src={avatar} />
          <Card.Body>
            <Card.Title>
              {firstName} {lastName}
            </Card.Title>
            <Card.Text>{email}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}

export default UserDetail;
