import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Jenkins from "./JenkinsImage.png";

function Cards() {
  return (
    <>
      <Card style={{ color:"grey", width: "20rem", marginTop: "7rem", border: "none" }}>
        <Card.Body>
          <Card.Title>
            <h1 style={{fontSize:"4rem"}}>JENKINS</h1>
            <br />
            <h5>Build Great Things at any level</h5>
          </Card.Title>

          <Card.Text>
            The leading open source automation server, Jenkins provides hundreds
            of plugins to support building, deploying and automating any
            project.
          </Card.Text>
          <Button variant="secondary">Documentation</Button>
          <Button style={{ marginLeft: "10px" }} variant="danger">
            Download
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
