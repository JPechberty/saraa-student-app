import {useEffect, useState} from "react";
import AssignmentService from "../services/assignmentService.js";
import {Badge, Card, Col, Container, Row} from "react-bootstrap";
import {AssignmentDetail} from "./parts/AssignmentDetail.jsx";
import Button from "react-bootstrap/Button";
import BadgeTeacher from "./parts/BadgeTeacher.jsx";
import BadgeProjectType from "./parts/BadgeProjectType.jsx";

export default function AssignmentsList(){
    const [assignments, setAssignments] = useState([]);

    const fetchAssignments = async () => {
        console.log("render")
        const data = await AssignmentService.findAll();
        if(data){
            setAssignments(data);
        }

    }

    //fetchAssignments();

    useEffect(() => {
        fetchAssignments();
    },[])

    const formatDueAt = (dueAt) => {

        const msDueAt = Date.parse(dueAt);
        const now = Date.parse('now');



        return msDueAt > now ? new Date(Date.parse(dueAt)).toLocaleDateString() : <>{new Date(Date.parse(dueAt)).toLocaleDateString()} <Badge bg="danger" >Terminé</Badge></> ;
    }

    return (
        <Container className={"mt-2"} >
            <Row className={"mt-2 mb-3"}>
                <Col>
                    <h2>Liste des devoirs</h2>
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
                                    <small className="text-muted d-flex gap-2 mb-2">Date limite de rendu: {formatDueAt(assignment.due_at)}</small>
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