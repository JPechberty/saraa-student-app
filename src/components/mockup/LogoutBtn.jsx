import Button from "react-bootstrap/Button";

export function LogoutBtn({logout}) {
    return <Button variant="danger" type="button" onClick={logout}>
        Deconnexion
    </Button>
}