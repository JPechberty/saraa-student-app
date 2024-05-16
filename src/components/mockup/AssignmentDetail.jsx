import {useState} from "react";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";

export function AssignmentDetail(){
    const [modalShow, setModalShow] = useState(false);

    const toggleShow = () => {
        setModalShow(true);
    }

    const toggleHide = () => {
        setModalShow(false);
    }

    return (
        <>
            <Button variant="primary" onClick={toggleShow}>
                Launch vertically centered modal
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
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}