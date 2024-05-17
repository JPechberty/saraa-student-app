import {Badge} from "react-bootstrap";

function BadgeTestResult({passed = false}) {

  const bg = passed ? "success" : "danger";
  const value = passed ? "Passed" : "Failed";


  return (
      <Badge bg={bg}>{value}</Badge>
  );
}

export default BadgeTestResult;