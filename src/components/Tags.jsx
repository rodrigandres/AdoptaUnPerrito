import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Tags = ({ text, backgroundColor }) => {
    return (
        <Button variant={backgroundColor}>
            <Badge bg={backgroundColor}>{text}</Badge>
        </Button>
    );
};

export default Tags;
