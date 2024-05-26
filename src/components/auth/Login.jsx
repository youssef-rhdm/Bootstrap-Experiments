import React, { useEffect } from "react";
import {
  Badge,
  Button,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Stack,
} from "react-bootstrap";
import { LoginSchema } from "../validation/LoginValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [errors, setErrors] = React.useState([]);
  const [Data, setData] = React.useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await LoginSchema.validate(formData, { abortEarly: false })
      .then(() => {
        let LoggedUser = Data.find(
          (user) =>
            (user.email == formData.email) &
            (user.password == formData.password)
        );
        if (LoggedUser != undefined) {
          localStorage.setItem("UserData", JSON.stringify(LoggedUser));
          localStorage.setItem("a", JSON.stringify(LoggedUser));
          navigate('/dashboard');
        } else {
          setErrors(["Email Or Password Incorrect"]);
        }
      })
      .catch((e) => setErrors(e.errors));
  };
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  function GetUsers() {
    axios
      .get("https://dummyjson.com/users")
      .then(async (response) => {
        setData(response.data.users);
      })
      .catch((e) => {
        console.warn(e);
      });
  }
  useEffect(() => {
    GetUsers();
  }, []);
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
