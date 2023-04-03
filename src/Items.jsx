import React from "react";
import {
  Container,
  Navbar,
  Button,
  Form,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import "./pagination.css";

export default function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((data, index) => (
          <Card key={index}>
            <div style={{ display: "flex" }}>
              <div>
                <Card.Img
                  variant="top"
                  src={data.urlToImage}
                  style={{ width: "25rem" }}
                />
              </div>
              <div>
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>

                <Card.Body>
                  <Card.Link href={data.url}> Link</Card.Link>
                </Card.Body>
              </div>
            </div>
          </Card>
        ))}
    </>
  );
}
