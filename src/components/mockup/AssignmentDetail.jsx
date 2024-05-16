import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import AssignmentService from "../../services/assignmentService.js";

export function AssignmentDetail({slug}){
    const [modalShow, setModalShow] = useState(false);
    const [assignment, setAssignment] = useState(null);

    const fetchAssignment = async (slug) => {
        console.log("render")
        const data = await AssignmentService.find(slug);
        setAssignment(data);
    }

    //fetchAssignments();

    useEffect(() => {
        if(modalShow){
            fetchAssignment(slug);
        }
    },[modalShow])

    const toggleShow = () => {
        setModalShow(true);
    }

    const toggleHide = () => {
        setModalShow(false);
    }

    return (
        <>
            <Button variant="primary" onClick={toggleShow}>
                Details
            </Button>

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={toggleHide}
                fullscreen={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {assignment && assignment.Title || "Loading..."}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {assignment && <h4>{assignment.Title} - {assignment.ProjectType} - {assignment.Teacher} </h4> || <h4>"Loading..."</h4>}
                    <p>
                        {assignment && assignment.Description || "Loading..."}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>fetchAssignment(slug)}>Update</Button>
                    <Button onClick={toggleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}