import { Col, Container, Row, Card, Button } from "react-bootstrap";
import ColouredLine from "../../Utilities/ColouredLine";
import WebDesign from "../../Utilities/Web-Design-Name";
import { motion } from "framer-motion";
// import img1 from '../../assets/Images/Hero1.png'

const Consultant = () => {
  return (
    <motion.div initial={{ x: 800, opacity:0 }}   animate={{x:0 , opacity:1}}>
      <Container className=" Content">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <WebDesign />
        </Col>
        <ColouredLine color="white" />
      </Row>



      {/* Contant Area Heading Start */}


      <Row>
        <Col md={12} lg={12} xs={12}>
          <div className="wrapper">
            <div className="details">
              <p className="Sub-heading">Consultants</p>
            </div>
            {/* <ColouredLine /> */}
          </div>
        </Col>
      </Row>

        {/* Contant Area Heading End */}

          {/* Contant Area Start */}

      <Row>
        <Col md={12} lg={12} xs={12}>
          <Container className="mt-3 ps-0 ">
            <Row>
              <Col xs={12} md={4} lg={3} xl={3}>
                <Card
                  className=" mb-4 Consultant-Card "
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                  }}
                  
                >
                  <Card.Img
                    variant="top"
                    src="https://dummyimage.com/1500x1000"
                    width="34"
                    loading="lazy"
                    
                  />
                  <Card.Body className="Consultant-Card-Body">
                    <Card.Text>Some quick example</Card.Text>
                    <Button className="Consultant-Card-Btn">CONTACT</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={4} lg={3} xl={3}>
                <Card
                  className=" mb-4 Consultant-Card "
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                  }}
                 
                >
                  <Card.Img
                    variant="top"
                    src="https://dummyimage.com/1500x1000"
                    width="34"
                    loading="lazy"
                  />
                  <Card.Body className="Consultant-Card-Body">
                    <Card.Text>Some quick example</Card.Text>
                    <Button className="Consultant-Card-Btn">CONTACT</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={4} lg={3} xl={3}>
                <Card
                  className=" mb-4 Consultant-Card "
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                  }}
                  
                >
                  <Card.Img
                    variant="top"
                    src="https://dummyimage.com/1500x1000"
                    width="34"
                    loading="lazy"
                  />
                  <Card.Body className="Consultant-Card-Body">
                    <Card.Text>Some quick example</Card.Text>
                    <Button className="Consultant-Card-Btn">CONTACT</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={4} lg={3} xl={3}>
                <Card
                  className=" mb-4 Consultant-Card "
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                  }}
                  
                >
                  <Card.Img
                    variant="top"
                    src="https://dummyimage.com/1500x1000"
                    width="34"
                    loading="lazy"
                  />
                  <Card.Body className="Consultant-Card-Body">
                    <Card.Text>Some quick example</Card.Text>
                    <Button className="Consultant-Card-Btn">CONTACT</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={4} lg={3} xl={3}>
                <Card
                  className=" mb-4 Consultant-Card "
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                  }}
                  
                >
                  <Card.Img
                    variant="top"
                    src="https://dummyimage.com/1500x1000"
                    width="34"
                    loading="lazy"
                  />
                  <Card.Body className="Consultant-Card-Body">
                    <Card.Text>Some quick example</Card.Text>
                    <Button className="Consultant-Card-Btn">CONTACT</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={4} lg={3} xl={3}>
                <Card
                  className=" mb-4 Consultant-Card "
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                  }}
                  
                >
                  <Card.Img
                    variant="top"
                    src="https://dummyimage.com/1500x1000"
                    width="34"
                    loading="lazy"
                  />
                  <Card.Body className="Consultant-Card-Body">
                    <Card.Text>Some quick example</Card.Text>
                    <Button className="Consultant-Card-Btn">CONTACT</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={4} lg={3} xl={3}>
                <Card
                  className=" mb-4 Consultant-Card "
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                  }}
                  
                >
                  <Card.Img
                    variant="top"
                    src="https://dummyimage.com/1500x1000"
                    width="34"
                    loading="lazy"
                  />
                  <Card.Body className="Consultant-Card-Body">
                    <Card.Text>Some quick example</Card.Text>
                    <Button className="Consultant-Card-Btn">CONTACT</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={4} lg={3} xl={3}>
                <Card
                  className=" mb-4 Consultant-Card "
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                  }}
                  
                >
                  <Card.Img
                    variant="top"
                    src="https://dummyimage.com/1500x1000"
                    width="34"
                    loading="lazy"
                  />
                  <Card.Body className="Consultant-Card-Body">
                    <Card.Text>Some quick example</Card.Text>
                    <Button className="Consultant-Card-Btn">CONTACT</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

       {/* Contant Area End */}
    </Container>
    </motion.div>
  );
};

export default Consultant;
