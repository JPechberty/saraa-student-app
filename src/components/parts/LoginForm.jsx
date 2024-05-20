import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {useFormatViolations} from "../../hooks/useFormatViolations.js";

export default function LoginForm({login}) {
    const [email, setEmail] = useState('std1@mail.Dev');
    const [password, setPassword] = useState('password');
    const [errMsg, setErrMsg] = useState({email:"", password:"",credentials:""});
    const {formatViolations} = useFormatViolations()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({email, password});
        } catch (err) {
            if(err.response.status === 401) {
                setErrMsg({...errMsg,credentials: "Identifiants invalide"});
                return;
            }

            setErrMsg(formatViolations(err.response.data.error));
        }

    }

    return (
        <Row className={'px-4 my-4 w-75'}>
            <Col xs={12}>
                <Form >
                    <h3>Saraa Student App</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Adresse email"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            isInvalid={!!errMsg.email}
                        />
                        <Form.Control.Feedback as="div" type="invalid">{errMsg.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="mot de passe"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            isInvalid={!!errMsg.password}
                        />
                        <Form.Control.Feedback as="div" type="invalid">{errMsg.password}</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="outline-primary" type="button" onClick={handleSubmit}>
                        Se connecter
                    </Button>
                </Form>
            </Col>
            <Col xs={12} className={'mt-2'}>
                {errMsg.credentials && <div className="alert alert-danger" role="alert">{errMsg.credentials}</div>}
            </Col>
        </Row>
    )
}