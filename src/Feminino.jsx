import "bootstrap/dist/css/bootstrap.min.css";
import "./css/feminino.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';

function Feminino() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="a"
            alt="Image 3"
          />
        </Carousel.Item>
      </Carousel>

      <div className="card_container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src=".../sapato-casual01img-1.jpg/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>

      <Container fluid="md">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </>
  );
}

export default Feminino;