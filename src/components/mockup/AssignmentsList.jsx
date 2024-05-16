import {Card, Col, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {AssignmentDetail} from "./AssignmentDetail.jsx";
import {useEffect, useState} from "react";
import AssignmentService from "../../services/assignmentService.js";

export function AssignmentsList(){

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


    return <Row xs={1} md={2} className="g-4">
        {assignments.map(assignment => (
            <Col key={assignment.Slug}>
                <Card>
                    <Card.Body>
                        <Card.Title>{assignment.Title}</Card.Title>
                        <Card.Text>
                            {assignment.Teacher} - {assignment.DueAt} - {assignment.ProjectType}
                        </Card.Text>
                        {/*<Button variant="primary">Details</Button>*/}
                        <AssignmentDetail slug={assignment.Slug}/>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
}