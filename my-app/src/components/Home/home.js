import React from "react";
import "../../style/App.css";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <>
      <Container>
        <div className="title-part-one">
          <h1>In</h1>
        </div>
        <div className="title-part-two">
          <h1>Concert</h1>
        </div>
      </Container>
      <div class="navbar" id="myNavbar">
        <a href="#">Popular Artists</a>
        <a href="#">Find a Concert</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          &#9776;
        </a>
      </div>
    </>
  );
}

export default Home;
