import React from "react";
import {
  Badge,
  Button,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Stack,
} from "react-bootstrap";
import { LoginSchema } from "../validation/LoginValidation";

function Login() {
  const [formData, setFormData] = React.useState({ email: "" });
  const [errors, setErrors] = React.useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await LoginSchema.validate(formData,{abortEarly:false})
      .then(() => {
        console.table(formData);
      })
      .catch((e) => setErrors(e.errors));
  };
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Form className="border w-auto" onSubmit={handleSubmit}>
        <h3 className="text-center">Connect to your account</h3>
        <Stack gap={3} className=" align-items-center ">
          <FormGroup>
            <FormLabel>Email</FormLabel>

            <FormControl
              onChange={handleInputs}
              value={formData.email}
              // type="email"
              name="email"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl
              onChange={handleInputs}
              value={formData.password}
              type="password"
              name="password"
            />
          </FormGroup>
          <FormCheck
            value="remember"
            onChange={handleInputs}
            checked={formData.remember === "remember"}
            label="remember me"
          />
          <Button type="submit">Log In</Button>
          {errors?.map((err, index) => (
            <Badge key={index} bg="danger">
              {err}
            </Badge>
          ))}
        </Stack>
      </Form>
    </>
  );
}

export default Login;
