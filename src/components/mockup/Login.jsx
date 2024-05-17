import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";

function Login({login}) {

    const [email, setEmail] = useState('std1@mail.Dev');
    const [password, setPassword] = useState('password');
    const [errMsg, setErrMsg] = useState({email:"", password:"",credentials:""});

    const formatViolations = (err) => {


        if (err) {
            const apiErrors = {};
            err.map(({field, message}) => {
                apiErrors[field.toLowerCase()] = message;
            });

            console.log(apiErrors)
            return apiErrors;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({email, password});
        } catch (err) {
            if(err.response.status === 401) {
                setErrMsg({...errMsg,credentials: "Invalid credentials"});
                return;
            }

            setErrMsg(formatViolations(err.response.data.error));
        }

    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        isInvalid={!!errMsg.email}
                    />
                    <Form.Control.Feedback as="div" type="invalid">{errMsg.email}</Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        isInvalid={!!errMsg.password}
                    />
                    <Form.Control.Feedback as="div" type="invalid">{errMsg.password}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            {errMsg.credentials && <div className="alert alert-danger" role="alert">{errMsg.credentials}</div>}
        </div>

    );
}

export default Login;