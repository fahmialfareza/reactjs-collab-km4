import React from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

function UserCard({ avatar, firstName, lastName, email, to }) {
  return (
    <Col md={3}>
      <Link to={to}>
        <div className="p-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
              <Card.Title>
                {firstName} {lastName}
              </Card.Title>
              <Card.Text>{email}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Link>
    </Col>
  );
}

export default UserCard;
