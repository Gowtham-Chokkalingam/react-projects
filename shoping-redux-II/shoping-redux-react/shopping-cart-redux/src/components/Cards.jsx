import { height } from "@mui/system";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsData from "./CardsData";
import "./style.css";

const Cards = () => {
  const [data, setData] = useState(CardsData);
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects Redux</h2>
      <div className="row d-flex justify-content-center align-items-center gap-4">
        {data.map((ele, id) => {
          return (
            <Card key={id} style={{ width: "18rem" }} className="mx-2 mt-4 card_style">
              <Card.Img variant="top" src={ele.imgdata} style={{ height: "14rem", marginTop: "10px" }} />
              <Card.Body>
                <Card.Title>{ele.rname}</Card.Title>
                <Card.Text>Price : ₹ {ele.price} </Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button variant="primary" className="col-lg">
                    Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
