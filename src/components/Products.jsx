import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";
import { PropTypes } from "prop-types";

export default function Products({ pductList }) {
  return (
    <Container>
      <Row>
        {pductList.map((product, index) => (
          <Col as='div' key={index} sm="3">
              <Product key={index} pduct={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

Products.propTypes = {
  pductList: PropTypes.array,
};
