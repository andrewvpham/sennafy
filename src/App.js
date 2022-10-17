import logo from './logo.svg';
import './App.css';
import Players from './Players';
import Character from './Character';
import Items from './Items';
import {Link, BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>Sennafy</Navbar.Brand>
          <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Character Info</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/items">
            <Nav.Link>Item Meta</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/players">
            <Nav.Link>Players</Nav.Link>
          </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/' element={<Character />} />
      <Route path='/players' element={<Players />} />
      <Route path='/items' element={<Items />} />
      </Routes>
    </Router>
  );
}

export default App;
