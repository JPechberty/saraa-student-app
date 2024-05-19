import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import SubmitRepoForm from "./SubmitRepoForm.jsx";
import BadgeTeacher from "./BadgeTeacher.jsx";
import BadgeProjectType from "./BadgeProjectType.jsx";
import BadgeTestResult from "./BadgeTestResult.jsx";
import {useRunJob} from "../../hooks/useRunJob.js";
import AssignmentService from "../../services/assignmentService.js";

export function AssignmentDetail({slug}){
    const [modalShow, setModalShow] = useState(false);
    const [assignment, setAssignment] = useState(null);
    const {runJob} = useRunJob();
    const fetchAssignment = async (slug) => {
        console.log("render")
        const data = await AssignmentService.find(slug);
        setAssignment(data);
    }

    const reRunJob = async (repository,slug) => {
        try {
            await runJob(repository,slug);
            await fetchAssignment(slug);
        } catch (err) {
            console.log(err);
        }
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
                        {assignment && assignment.title || "Loading..."}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {assignment &&
                        <div>
                            <BadgeTeacher value={assignment.teacher} />
                            <BadgeProjectType value={assignment.project_type} />
                        </div>
                        || <h4>"Loading..."</h4>
                    }
                    <p>
                        {assignment && assignment.description || "Loading..."}
                    </p>

                    {assignment && !assignment.job && <SubmitRepoForm slug={assignment.slug} />}
                    {assignment && assignment.job &&
                        <div>
                            <h5>Report for submitted repository : {assignment.job.repository}</h5>
                            <h5>Job status : {assignment.job.status}</h5>
                            <h5>Score : {assignment.job.report && assignment.job.report.score || "Not yet graded"}</h5>
                            <h5> Details </h5>
                            <Button onClick={()=>reRunJob(assignment.job.repository,slug)}>Rerun</Button>
                            <table className={"table table-striped"}>
                                <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Method</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assignment.job.report && assignment.job.report.details.map(test => (
                                        <tr key={test.MethodName}>
                                            <td>{test.ClassName}</td>
                                            <td>{test.PrettifiedMethodName}</td>
                                            <td><BadgeTestResult passed={test.Status === "0"}/> </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>fetchAssignment(slug)}>Update</Button>
                    <Button onClick={toggleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}