import React from 'react';

import {
  Row,
  Col,
  Image,
} from 'react-bootstrap';

const Content = () => (
  <main className="container">
    <Row idName="line-1">
      <Col className="col-3"><Image src="#" rounded /></Col>
    </Row>
    <Row idName="line-1">
      <Col className="col-3">Movie</Col>
    </Row>

  </main>
);

export default Content;
