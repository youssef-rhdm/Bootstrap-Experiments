import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
} from "react-bootstrap";
import { PropTypes } from "prop-types";
import { useState } from "react";

export default function Product({ pduct }) {
  const { thumbnail, description, price } = pduct;
  const [formdata,setFormdata] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata()
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardBody>
          <CardImg src={thumbnail} />
          <p>{description}</p>
          <Badge bg="success">${price}</Badge>
        </CardBody>
        <CardFooter>
          <Button variant="primary">Ajouter au panier</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
Product.propTypes = {
  pduct: PropTypes.object,
};
