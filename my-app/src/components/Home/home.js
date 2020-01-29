import React from "react";
import "../../style/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <>
      <Container fluid>
        <Row className="row-1">
          <Col>
            <h4 className="col-1-text" id="inConcert">
              In Concert
            </h4>
            <h4 className="col-1-text" id="findConcert">
              Find your concert
            </h4>
          </Col>
          <Col>
            <h4 className="col-2-text" id="inConcert">
              Concerts In:
            </h4>
            <h4 className="col-2-text" id="findConcert">
              Dallas Area
            </h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
