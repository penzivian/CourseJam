import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <h5>{product.name}</h5>
          </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as="div">
        <div className="my-3">
          <Rating
            value={product.rating}
            text={` ${product.numReviews} Reviews`}
          ></Rating>
        </div>
      </Card.Text>

      <Card.Text as="h3">Rs. {product.price}</Card.Text>
    </Card>
  );
};

export default Product;
