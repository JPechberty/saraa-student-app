import {Col, Container, Row} from "react-bootstrap";
import LoginForm from "./mockup/internals/LoginForm.jsx";
import Logo from '../assets/logo.webp';
export default function Login({login}){
    return (
       <Container fluid style={{height:'100%'}}>
           <Row style={{height:'100%'}}>
                <Col className={'d-none d-lg-block'} style={{backgroundImage:`url(${Logo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                </Col>
               <Col className={'d-flex align-items-center justify-content-center'}>
                   <LoginForm login={login}/>
               </Col>
           </Row>
       </Container>
    )
}
