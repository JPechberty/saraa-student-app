import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {useFormatViolations} from "../../hooks/useFormatViolations.js";

export default function RegisterForm({login}) {
    const [registration, setRegistration] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        classroom: ""
    });
    const [errMsg, setErrMsg] = useState({email: "", password: "", firstname: "", lastname: "", classroom: ""});
    const {formatViolations} = useFormatViolations()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(registration);
        // try {
        //     await login({email, password});
        // } catch (err) {
        //     if(err.response.status === 401) {
        //         setErrMsg({...errMsg,credentials: "Identifiants invalide"});
        //         return;
        //     }
        //
        //     setErrMsg(formatViolations(err.response.data.error));
        // }

    }

    const handleChange = (e) => {
        setRegistration({...registration, [e.target.name]: e.target.value});
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Adresse email"
                    value={registration.email}
                    onChange={handleChange}
                    isInvalid={!!errMsg.email}
                />
                <Form.Control.Feedback as="div" type="invalid">{errMsg.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="mot de passe"
                    value={registration.password}
                    onChange={handleChange}
                    isInvalid={!!errMsg.password}
                />
                <Form.Control.Feedback as="div" type="invalid">{errMsg.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Classe</Form.Label>
                <Form.Select
                    aria-label="Default select example"
                    value={registration.classroom}
                    onChange={handleChange}
                    isInvalid={!!errMsg.classroom}
                >
                    <option>Classe ....</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback as="div" type="invalid">{errMsg.classroom}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nom"
                    value={registration.lastname}
                    onChange={handleChange}
                    isInvalid={!!errMsg.lastname}
                />
                <Form.Control.Feedback as="div" type="invalid">{errMsg.lastname}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Prénom"
                    value={registration.firstname}
                    onChange={handleChange}
                    isInvalid={!!errMsg.firstname}
                />
                <Form.Control.Feedback as="div" type="invalid">{errMsg.firstname}</Form.Control.Feedback>
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="outline-primary" type="button" onClick={handleSubmit}>
                    Créer mon compte
                </Button>
            </div>

        </Form>
    )
}