import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  CardFooter
} from "reactstrap";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col
          md={{ size: 6, offset: 3 }}
          lg={{ size: 6, offset: 3 }}
          xs="12"
          className="justify-content-center"
          style={{ marginTop: 50 }}
        >
          <Card>
            <CardHeader style={{ backgroundColor: "green" }} tag="h3">
              Home page
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5">Welcome on Home Page</CardTitle>
              <CardSubtitle>
                Please join us or login if you have already an account{" "}
              </CardSubtitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </CardText>
            </CardBody>
            <CardFooter style={{ textAlign: "right" }}>FullStack</CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
