import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Cards from './Cards'
import Img from './JenkinsImage.png';



function Images() {

return (
    <>
    
    <Row>
   <Col>
   
    <Image className="Img" src={Img} alt="Image" fluid />
    </Col>
    <Col>
    <Cards/>
    </Col>
    </Row>
    
</>
)
    
}

export default Images;

