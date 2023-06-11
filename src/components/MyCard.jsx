import { Card } from 'react-bootstrap';
import Tags from './Tags';
import TextBlock from './TextBlock';

const MyCard = ({src, title2, text, btn, borderColor}) => {
    return (
        <>
            <Card border={borderColor} style={{ width: '20rem'}}>
                <Card.Img variant="top" src={src} className="custom-margin"/>
                <Card.Body>
                    <TextBlock title2={title2}/>
                    <TextBlock text={text}/>
                    <Tags backgroundColor={borderColor} text={btn} >{btn}</Tags>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default MyCard;