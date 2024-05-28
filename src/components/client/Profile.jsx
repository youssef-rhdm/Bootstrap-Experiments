import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  const UserData = JSON.parse(localStorage.getItem("UserData"));
  const { firstName, lastName, birthDate, email, phone, username, image } = UserData;
  return (
    <  >
      <Card>
        <CardHeader>
          <CardTitle className="text-center">User Data</CardTitle>
        </CardHeader>
        <CardBody>
          <CardImg variant="top" src={image} />
          <CardText>Full Name : {`${firstName}, ${lastName}`} </CardText>
          <CardText>BirthDay : {`${birthDate}`} </CardText>
          <CardText>Phone : {`${phone}`} </CardText>
          <CardText>UserName : {`${username}`} </CardText>
          <CardText>Email : {`${email}`} </CardText>
        </CardBody>
        <CardFooter>
          <Button as={Link} to={"/Profile/edit"} variant="primary">
            Update
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
