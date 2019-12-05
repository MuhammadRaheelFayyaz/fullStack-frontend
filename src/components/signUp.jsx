import React, { useState } from "react";
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
import { mapStateToProps, mapDispatchToProps } from "../actions/user.action";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
const SignUp = props => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const submitHandler = async () => {
    let user = { name, password };
    try {
      await props.register(user);
      setSignUp(true);
    } catch (error) {
      alert(error);
    }
  };
  if (signUp) return <Redirect to="/" />;
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
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jhon"
                    onChange={e => setName(e.target.value)}
                    value={name}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password*</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="enter password here"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                </FormGroup>
                <div style={{ textAlign: "right" }}>
                  <Button color="success" type="button" onClick={submitHandler}>
                    Register
                  </Button>
                </div>
              </Form>
            </CardBody>
            <CardFooter>
              <Button color="link">
                <Link to="/signin">Already have an account Signin</Link>
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
