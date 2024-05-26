import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import {useFormatViolations} from "../../hooks/useFormatViolations.js";
import classroomsService from "../../services/classroomsService.js";

export default function RegisterForm({register,login}) {
    const [classrooms, setClassrooms] = useState([]);
    const [registration, setRegistration] = useState({
        email: "std2@mail.dev",
        password: "password",
        firstname: "Student 2",
        lastname: "Test",
        classroom: "1"
    });
    const [errMsg, setErrMsg] = useState({email: "", password: "", firstname: "", lastname: "", classroom: ""});
    const [errMainMsg, setErrMainMsg] = useState({error: ""});
    const {formatViolations} = useFormatViolations()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(registration);
            await login({email:registration.email,password:registration.password});
        } catch (err) {
            console.log(err);
            if (err.response.status === 400) {
                setErrMainMsg({error: err.response.data.error});
                return;
            }
            setErrMsg(formatViolations(err.response.data.error));
        }

    }

    const handleChange = (e) => {
        setRegistration({...registration, [e.target.name]: e.target.value});
    }

    const fetchClassrooms = async () => {
        const classrooms = await classroomsService.findAll();
        setClassrooms(classrooms);
    }

    useEffect(() => {
        fetchClassrooms();
    }, []);

    return (
        <Form>
            {errMainMsg.error && <div className="alert alert-danger mb-2 mt-2">{errMainMsg.error}</div>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Adresse email"
                    name={"email"}
                    value={registration.email}
                    onChange={e=>handleChange(e)}
                    isInvalid={!!errMsg.email}
                />
                <Form.Control.Feedback as="div" type="invalid">{errMsg.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                    type="password"
                    name={"password"}
                    placeholder="mot de passe"
                    value={registration.password}
                    onChange={e=>handleChange(e)}
                    isInvalid={!!errMsg.password}
                />
                <Form.Control.Feedback as="div" type="invalid">{errMsg.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="classroom">
                <Form.Label>Classe</Form.Label>
                <Form.Select
                    aria-label="Default select example"
                    name={"classroom"}
                    value={registration.classroom}
                    onChange={e=>handleChange(e)}
                    isInvalid={!!errMsg.classroom}
                >
                    <option>Classe ....</option>
                    {classrooms.map(classroom => (
                        <option key={classroom.id} value={classroom.id}>{classroom.name}</option>

                    ))}
                </Form.Select>
                <Form.Control.Feedback as="div" type="invalid">{errMsg.classroom}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nom"
                    name={"lastname"}
                    value={registration.lastname}
                    onChange={e=>handleChange(e)}
                    isInvalid={!!errMsg.lastname}
                />
                <Form.Control.Feedback as="div" type="invalid">{errMsg.lastname}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Prénom"
                    name={"firstname"}
                    value={registration.firstname}
                    onChange={e=>handleChange(e)}
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