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
          <Col className="row-1-col-1">
            <h5 className="col-1-text" id="inConcert">
              In Concert
            </h5>
            <h5 className="col-1-text" id="findConcert">
              Find your concert
            </h5>
          </Col>
          <Col className="row-1-col-2">
            <h5 className="col-2-text" id="inConcert">
              Concerts In:
            </h5>
            <h5 className="col-2-text" id="findConcert">
              Dallas Area
            </h5>
          </Col>
          <Col className="row-1-col-3"></Col>
        </Row>
        <Row className="artist-row">
          <button>
            <Col>
              <h2 className="artist-1">Halsey</h2>
            </Col>
          </button>
          <button>
            <Col>
              <h2 className="artist">The 1975</h2>
            </Col>
          </button>
          <button>
            <Col>
              <h2 className="artist">Nickelback</h2>
            </Col>
          </button>
          <button>
            <Col>
              <h2 className="artist">Steve Aokli</h2>
            </Col>
          </button>
        </Row>
        <Row className="artist-row">
          <button>
            <Col>
              <h2 className="artist-1">Alicia Keys</h2>
            </Col>
          </button>
          <button>
            <Col>
              <h2 className="artist">BTS</h2>
            </Col>
          </button>
        </Row>
        <Row className="artist-row">
          <button>
            <Col>
              <h2 className="artist-1">Bon Jovi and Bryan Adams</h2>
            </Col>
          </button>
          <button>
            <Col>
              <h2 className="artist">Of Monsters and Men</h2>
            </Col>
          </button>
        </Row>
        <Row className="festival-row">
          <button>
            <Col>
              <h2 className="artist-1">Coachella</h2>
            </Col>
          </button>
          <button>
            <Col>
              <h2 className="festival">Inkcarnation</h2>
            </Col>
          </button>
          <button>
            <Col>
              <h2 className="festival">Innings Festival 2020</h2>
            </Col>
          </button>
        </Row>
      </Container>
      <Container fluid>
        <Row className="row-2">
          <Col className="row-1-col-1">
            <h5>Sign Up</h5>
          </Col>
          <Col>
            <h5>About In Concert</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
