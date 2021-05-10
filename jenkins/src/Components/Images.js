import imgNews from '../Components/netflix.png';
import airbnb from '../Components/airbnb.jpg';
import github from '../Components/github.png';
import uber from '../Components/uber.png';
import paypal from '../Components/paypal.jpg';
import aws from '../Components/aws.png';
import { Container } from 'reactstrap';


function Images() {


    return(

    <>

     <Container >
     <div style={{display:'flex',flexWrap:'wrap',padding:'2rem',alignItems:'center'}} >

         <img src={imgNews} alt="" />
         <img src={airbnb} alt="" />
         <img src={github} alt="" />
         <img src={uber} alt="" />
         <img src={paypal} alt="" />
         <img src={imgNews} alt="" />




     </div>


     </Container>



    
    
    
    
    
    
    
    </>





    )



    
}


export default Images;