import {Col, Container, Navbar, Row} from "react-bootstrap";
import Login from "./components/mockup/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AssignmentsList} from "./components/mockup/AssignmentsList.jsx";
import {useEffect, useState} from "react";
import {LogoutBtn} from "./components/mockup/LogoutBtn.jsx";
import {useAccountStore} from "./hooks/useAccountStore.js";
export function MockUpInterface() {
  const {loggedIn,email,login,logout,setup} = useAccountStore();

  useEffect(() => {
    setup();
  }, []);

  return <>
    {loggedIn &&
        <Navbar sticky="top" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Saraa Student</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end h-stack gap-2">
              <Navbar.Text>
                Signed in as: <strong>{email}</strong>
              </Navbar.Text>
              <LogoutBtn logout={logout}/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    }
    <Container >
      <Row>
        <Col>
          <h1>Mock Up Interface</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {!loggedIn &&  <Login login={login}/>}
          {loggedIn &&
              <AssignmentsList/>
          }
        </Col>
      </Row>
    </Container>
  </>

}