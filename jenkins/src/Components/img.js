import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Cards from './Cards'
import Img from './JenkinsImage.png';



function Images() {

return (
    <>
    
    <div className="ImageCards">
   
   
    <Image className="Img" src={Img} alt="Image" fluid />
   
    <Cards className="Cards" />
    
    </div>
    
</>
)
    
}

export default Images;

