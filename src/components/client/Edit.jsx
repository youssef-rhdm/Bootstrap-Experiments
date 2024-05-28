import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormText,
  InputGroup,
  Stack,
} from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function Edit() {
  const [auth, setAuth] = useState({});
  const [errors, setErrors] = useState([]);
  const Udata = JSON.parse(localStorage.getItem("UserData"));
  useEffect(() => {
    setAuth(Udata);
    console.log(auth);
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("UserData", JSON.stringify(auth));
  };

  const HandleInputs = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  return (
    <Container>
      <Card className="w-50">
        <Form onSubmit={HandleSubmit}>
          <CardBody>
            <Stack gap={3}>
              <FormText>
                Name
                <FormControl
                  onChange={HandleInputs}
                  value={auth.firstName}
                  type="text"
                  name="firstName"
                  placeholder="firstName"
                />
              </FormText>
              <FormText>
                Name
                <FormControl
                  onChange={HandleInputs}
                  value={auth.lastName}
                  type="text"
                  name="lastName"
                  placeholder="lastName"
                />
              </FormText>
              <FormText>
                Email
                <FormControl
                  onChange={HandleInputs}
                  name="email"
                  value={auth.email}
                  type="email"
                  placeholder="Email"
                />
              </FormText>
              <FormGroup>
                <FormText>Phone Number</FormText>
                <InputGroup>
                  <InputGroupText>+212</InputGroupText>
                  <FormControl
                    onChange={HandleInputs}
                    name="telephone"
                    type="telephone"
                    placeholder="6xxxxxx"
                    value={auth.phone}
                  />
                </InputGroup>
              </FormGroup>
            </Stack>
          </CardBody>
          <CardFooter>
            <FormGroup as="div" className="d-flex justify-content-evenly">
              <Button className="w-25" variant="outline-primary" type="submit">
                Submit
              </Button>
              <Button className="w-25" variant="outline-secondary">
                Cancel
              </Button>
            </FormGroup>
          </CardFooter>
        </Form>
      </Card>
    </Container>
  );
}
