import Form from "react-bootstrap/Form";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import AssignmentService from "../../../services/assignmentService.js";
import {useFormatViolations} from "../../../hooks/useFormatViolations.js";
import {useRunJob} from "../../../hooks/useRunJob.js";

function SubmitRepoForm({slug}){

    const [repository, setRepository] = useState('');
    const [errMsg, setErrMsg] = useState({repository:""});
    const {formatViolations} = useFormatViolations();
    const {runJob} = useRunJob();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await runJob(repository,slug);
        } catch (err) {
            setErrMsg(formatViolations(err.response.data.error));
        }
    }


    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Repository</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter repository"
                        value={repository}
                        onChange={e=>setRepository(e.target.value)}
                        isInvalid={!!errMsg.repository}
                    />
                    <Form.Control.Feedback as="div" type="invalid">{errMsg.repository}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SubmitRepoForm;