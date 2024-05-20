import {useEffect, useState} from "react";
import AssignmentService from "../services/assignmentService.js";
import {Card, Col, Container, Row} from "react-bootstrap";
import {AssignmentDetail} from "./parts/AssignmentDetail.jsx";
import Button from "react-bootstrap/Button";
import BadgeTeacher from "./parts/BadgeTeacher.jsx";
import BadgeProjectType from "./parts/BadgeProjectType.jsx";

export default function AssignmentsList({logout}){
    const [assignments, setAssignments] = useState([]);

    const fetchAssignments = async () => {
        console.log("render")
        const data = await AssignmentService.findAll();
        setAssignments(data);
    }

    //fetchAssignments();

    useEffect(() => {
        fetchAssignments();
    },[])



    return (
        <Container className={"mt-2"} >
            <Row className={"mt-2 mb-3"}>
                <Col>
                    <Button variant="outline-danger" onClick={logout}>Déconnexion</Button>
                </Col>
            </Row>
            <Row xs={1} md={3} className="g-4">
                {assignments.map(assignment => (
                    <Col key={assignment.slug}>
                        <Card border={'primary'}>
                            <Card.Body>
                                <Card.Title>
                                    <b>{assignment.title}</b>
                                </Card.Title>
                                <Card.Text>
                                    <small className="text-muted d-flex gap-2 mb-2">
                                        <BadgeTeacher value={assignment.teacher} />
                                        <BadgeProjectType value={assignment.project_type}/>
                                    </small>
                                    <p>Deadline: {assignment.due_at}</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className={'d-flex justify-content-center'}>
                                <AssignmentDetail slug={assignment.slug}/>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}