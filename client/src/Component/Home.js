import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MusicPlayer from "./Music/MusicPlayerOld";
import Weather from "./Weather/Weather";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Weather />
          <MusicPlayer />
          <Card>
            <Card.Body>
              <Card.Title>리액트 웹사이트</Card.Title>
              <Card.Text>리액트와 부트스트랩을 활용한 웹사이트</Card.Text>
              <Link to="/movie">
                <Button variant="primary">Go To Movies</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
