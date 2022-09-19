import './index.css';
import React from "react"
import ReactDOM from 'react-dom';
import App from './App';
import Headings from './Headings'
import { Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Container className="container">
      <Row><Headings/></Row>
      <App/>
    </Container>,
    document.getElementById('root')
);
