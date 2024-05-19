import {Badge} from "react-bootstrap";

function BadgeProjectType({value}) {
  return (
      <Badge bg="success" >{value}</Badge>
  );
}

export default BadgeProjectType;