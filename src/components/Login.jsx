import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import LoginForm from "./parts/LoginForm.jsx";
import Logo from '../assets/logo.webp';
import RegisterForm from "./parts/RegisterForm.jsx";
export default function Login({login,register}){

    return (
       <Container fluid style={{height:'100%'}}>
           <Row style={{height:'100%'}}>
                <Col className={'d-none d-lg-block'} style={{backgroundImage:`url(${Logo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                </Col>
               <Col className={'d-flex align-items-center justify-content-center'}>
                   <Row className={'px-4 my-4 w-75'}>
                       <Col xs={12}>
                           <h3 className={"text-center"}>Saraa Student App</h3>
                           <Tabs
                               defaultActiveKey="login"
                               id="fill-tab-example"
                               className="mb-3"
                               fill
                               variant="underline"
                               justify
                           >
                               <Tab eventKey="login" title="Se connecter">
                                     <LoginForm login={login}/>
                               </Tab>
                               <Tab eventKey="register" title="Créer mon compte">
                                   <RegisterForm register={register} login={login}/>
                               </Tab>
                           </Tabs>
                       </Col>
                 </Row>
               </Col>
           </Row>
       </Container>
    )
}
