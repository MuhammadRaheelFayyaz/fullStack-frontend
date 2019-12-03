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
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Button
} from "reactstrap";
const SignUp = () => {
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
            <CardHeader tag="h3">Join Us</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="name">Username*</Label>
                  <Input type="text" name="name" id="name" placeholder="Jhon" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password*</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="enter password here"
                  />
                </FormGroup>
                <div style={{ textAlign: "right" }}>
                  <Button color="success" type="button">
                    Register
                  </Button>
                </div>
              </Form>
            </CardBody>
            <CardFooter>
              <Button color="link">Already have an account Signin</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
