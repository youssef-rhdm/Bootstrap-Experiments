import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  FloatingLabel,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Foorm() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [FormData, setFormData] = useState({});
  const handleEmail = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ email: Email, Password: Password });
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel label="email">
          <FormControl
            value={Email}
            onChange={handleEmail}
            placeholder="email"
          />
        </FloatingLabel>
        {Email.length == 0
          ? null
          : Email.length < 4 && <span>Provide a Valid email</span>}
        <FloatingLabel label="Password">
          <FormControl
            value={Password}
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </FloatingLabel>
        {Password.length == 0
          ? null
          : Password.length < 4 && <span>Provide a Valid email</span>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {FormData == {} && (
        <Card>
          <CardHeader>
            <h2>User Data</h2>
          </CardHeader>
          <CardBody>
            <p>Name :{FormData.name}</p>
            <p>Password : {FormData.Password}</p>
          </CardBody>
          <CardFooter>
            <Button variant="danger">Delete</Button>
            <Button variant="outline-primary">Edit</Button>
          </CardFooter>
        </Card>
      )}
    </Container>
  );
}
