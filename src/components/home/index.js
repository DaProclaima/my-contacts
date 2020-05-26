import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './footer';
import Header from './header';
import Content from './content';

class Home extends Component {
  constructor() {
    super();

    // Initial State
    this.state = {
      textHeader: 'Welcome !',
    };
  }

  render() {
    const { textHeader } = this.state;

    return (
      <div>
        <Container fluid>
          <Row>
            <Col className="col-12">
              <Header text={textHeader || 'hello'} />
            </Col>
          </Row>
          <Row>
            <Col className="col-12">
              <Content />
            </Col>
          </Row>
          <Row>
            <Col className="col-12">
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
