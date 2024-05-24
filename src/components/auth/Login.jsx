import React from "react";
import {
  Button,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Stack,
} from "react-bootstrap";

function Login() {
  const [formData, setFormData] = React.useState({ password: "", email: "" });
  const [errors, setErrors] = React.useState({ password: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.email & formData.password !=null?console.log('notnull'):console.log('null');
    console.table(formData);
  };
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
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
              type="email"
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
        </Stack>
      </Form>
    </>
  );
}

export default Login;
