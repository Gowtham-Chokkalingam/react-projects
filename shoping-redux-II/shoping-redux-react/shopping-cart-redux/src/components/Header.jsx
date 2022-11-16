import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar style={{ height: "60px" }} bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="text-light text-decoration-none mx-3">
          Add To Cart
        </NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="text-light text-decoration-none">
            Home
          </NavLink>
        </Nav>
        <Badge
          badgeContent={4}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
        </Badge>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {/* <MenuItem onClick={handleClose}>Prof
          Cile</MenuItem> */}
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i className="fas fa-close smallclose" style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}
            onClick={handleClose}></i>
            <p style={{ fontSize: 22 }}>Your Cart Is Empty</p>
            <img className="emptycart_img" style={{ width: "5rem", padding: 10 }} src="./cart.gif" alt="cart"></img>
          </div>
        </Menu>
      </Container>
    </Navbar>
  );
};

export default Header;
