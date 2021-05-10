import React from "react";
import img from "../Components/tools.png";
import img2 from '../Components/setting.png';
import img3 from '../Components/tab.png'
import img4 from '../Components/over.png';
import img5 from '../Components/down.png';
import { Container, Row, Col } from 'reactstrap';
import ModalExample from './Modal';
import Medias from './Media';
import Images from './Images';

import Footer from '../Components/footer';

const Containers = (props) => {
  return (
    <>
     <Container className="themed-container">
      <Row className="RowFlex">
        <Col className="Column">
          {" "}
          <img src={img} alt="no image" />
          <br />
          <h4>Continuous Integration and Continuous Delivery</h4>
          
          <p>As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.</p>
        </Col>

        <Col className="Column">
          {" "}
          <img src={img2} alt="no image" />
          <br />
          <h4>Easy installation</h4>
          
          <p>As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.</p>
        </Col>

        <Col className="Column">
          {" "}
          <img src={img3} alt="no image" />
          <br />
          <h4>Easy configuration</h4>
          
          <p>As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.</p>
        </Col>
        
      </Row>








       <Row className="RowFlex">
        <Col className="Column">
          {" "}
          <img src={img4} alt="no image" />
          <br />
          <h4>Plugins</h4>
          
          <p>As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.</p>
        </Col>

        <Col className="Column">
          {" "}
          <img src={img5} alt="no image" />
          <br />
          <h4>Extensible</h4>
          
          <p>As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.</p>
        </Col>

        <Col className="Column">
          {" "}
          <img src={img} alt="no image" />
          <br />
          <h4>Distributed</h4>
          
          <p>As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.</p>
        </Col>
        
      </Row>

      </Container>
      <ModalExample/>

      <Medias/>
      <Images/>




    <Footer/>

      



    </>
  );
};

export default Containers;
