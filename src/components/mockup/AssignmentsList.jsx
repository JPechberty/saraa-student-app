import {Card, Col, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {AssignmentDetail} from "./AssignmentDetail.jsx";

export function AssignmentsList(){
    return <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        {/*<Button variant="primary">Details</Button>*/}
                        <AssignmentDetail/>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
}