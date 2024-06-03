import {Container, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Header({email,logout}){
    return (
        <Navbar className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">Saraa Student App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end gap-2">
                    <Navbar.Text>
                        {email}
                    </Navbar.Text>
                    <Button  onClick={logout} variant="outline-danger">Déconnexion</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}