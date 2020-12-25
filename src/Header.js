import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Header.css";
import { stateValueProvider } from "./StateProvider";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [{ user }, dispatch] = stateValueProvider();
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input type="text" placeholder="Search Your Favorite song" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="DPS" />
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {user?.display_name}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
