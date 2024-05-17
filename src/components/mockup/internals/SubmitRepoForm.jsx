import Form from "react-bootstrap/Form";
import {useState} from "react";
import Button from "react-bootstrap/Button";

function SubmitRepoForm(){

    const [repository, setRepository] = useState('');
    const [errMsg, setErrMsg] = useState({repository:""});

    const formatViolations = (err) => {


        if (err) {
            const apiErrors = {};
            err.map(({field, message}) => {
                apiErrors[field.toLowerCase()] = message;
            });

            console.log(apiErrors)
            return apiErrors;
        }
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //     await submitRepo({repository});
        // } catch (err) {
        //     setErrMsg(formatViolations(err.response.data.error));
        // }
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