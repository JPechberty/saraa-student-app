import {Badge} from "react-bootstrap";

function BadgeTeacher({value}) {
  return (
      <Badge bg="primary">{value}</Badge>
  );
}

export default BadgeTeacher;