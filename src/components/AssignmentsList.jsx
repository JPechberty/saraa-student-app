import {useEffect, useState} from "react";
import AssignmentService from "../services/assignmentService.js";
import {Card, Col, Container, Row} from "react-bootstrap";
import {AssignmentDetail} from "./parts/AssignmentDetail.jsx";
import Button from "react-bootstrap/Button";

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
                    <Button variant="outline-danger" onClick={logout}>Logout</Button>
                </Col>
            </Row>
            <Row xs={1} md={3} className="g-4">
                {assignments.map(assignment => (
                    <Col key={assignment.slug}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{assignment.title}</Card.Title>
                                <Card.Text>
                                    {assignment.teacher} - {assignment.due_at} - {assignment.project_type}
                                </Card.Text>
                                {/*<Button variant="primary">Details</Button>*/}
                                <AssignmentDetail slug={assignment.slug}/>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}