import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FloatingLabel,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  FormText,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { FormSchema } from "../validation/SignUpValidation";

export default function SignUp() {
  const [FormData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState([]);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    await FormSchema.validate(FormData, { abortEarly: false })
      .then(() => console.log(FormData))
      .catch((e) => {
        setErrors(e.errors);
      });
  };
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      telephone: "",
      message: "",
      sex: "",
      occupation: "",
    });
  };

  const HandleInputs = (e) => {
    e.preventDefault();
    const { name, value, type, checked } = e.target;
    setFormData({ ...FormData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <Card className="w-50">
      <CardHeader>
        <h4 className="text-center">Submit This Form</h4>
      </CardHeader>
      {errors && errors.map((e, id) => <span key={id}>{e}</span>)}
      <Form onSubmit={HandleSubmit}>
        <CardBody>
          <Stack gap={3}>
            <FormText>
              Name
              <FormControl
                onChange={HandleInputs}
                value={FormData.name}
                type="text"
                name="name"
                placeholder="Name"
              />
            </FormText>
            <FormText>
              Email
              <FormControl
                onChange={HandleInputs}
                name="email"
                value={FormData.email}
                type="email"
                placeholder="Email"
              />
            </FormText>
            <FormGroup>
              <FormText>Phone Number</FormText>
              <InputGroup>
                <InputGroup.Text>+212</InputGroup.Text>
                <FormControl
                  onChange={HandleInputs}
                  name="telephone"
                  type="number"
                  placeholder="6xxxxxx"
                  maxLength={9}
                  value={FormData.telephone}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <FormText>
                Ecrire un message
                <FormControl
                  onChange={HandleInputs}
                  name="message"
                  as="textarea"
                  value={FormData.message}
                  placeholder="Ecrire un message"
                />
              </FormText>
            </FormGroup>
          </Stack>
          
          <Stack className="m-2 align-items-center ">
            <FormLabel>
              Sexe
            </FormLabel>
            <FormGroup>

            <FormCheck
              value="male"
              checked={FormData.sex === "male"}
              name="sex"
              type="radio"
              onChange={HandleInputs}
              label="Male"
            />
            <FormCheck
              onChange={HandleInputs}
              checked={FormData.sex === "female"}
              value="female"
              name="sex"
              type="radio"
              label="Female"
            />
              </FormGroup>
          </Stack>
          <FormText>
            Occupation
            <FormSelect
              onChange={HandleInputs}
              name="occupation"
              value={FormData.occupation}
            >
              <option>Select an option</option>
              <optgroup label="Student">
                <option value="OFPPT">OFPPT</option>
                <option value="FACULTE">FACULTE</option>
                <option value="ECOLE SUP">Ecole Superieur</option>
              </optgroup>
              <optgroup label="Employé">
                <option value="Employé Public">Public</option>
                <option value="Employé Privé">Prive</option>
              </optgroup>
              <option value="autre">Autre</option>
            </FormSelect>
          </FormText>
        </CardBody>
        <CardFooter>
          <FormGroup as="div" className="d-flex justify-content-evenly">
            <Button className="w-25" variant="outline-primary" type="submit">
              Submit
            </Button>
            <Button
              className="w-25"
              onClick={handleReset}
              variant="outline-secondary"
              type="reset"
            >
              Reset
            </Button>
          </FormGroup>
        </CardFooter>
      </Form>
    </Card>
  );
}
