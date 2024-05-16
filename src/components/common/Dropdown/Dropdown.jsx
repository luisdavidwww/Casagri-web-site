import React, { useState, useEffect } from "react";
import "./Dropdown.css";

//list Options
import { SubMenu } from "../Dropdown/SubMenu"

function Dropdown({ ClickDrop }) {

  const [click, setClick] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);


  const handleClick = () => {
    setClick(!click)
  }

  const handleItemHover = (index) => {
    setHoveredItem(index);
  }

  const handleItemNull = (props) => {
    setHoveredItem(props);
  }

  useEffect(() => {
    console.log(SubMenu);
  }, []);



  return (
    <div
    //onClick={handleClick}
    className={ClickDrop ? "dropdown_menu_occho" : "dropdown_menu_occho desactive"}
    >
      {SubMenu.map((link, index) => (
        <div
          className={ClickDrop ? "dropdown-list-option" : "dropdown-list-option desactive"}
          key={link.id}
          onMouseEnter={() => handleItemHover(index)}
          onMouseLeave={() => handleItemNull(null)}
          >
          <div className={ClickDrop ? (hoveredItem == index ? "content-dropdown-list-hover" : "content-dropdown-list") : "content-dropdown-list desactive"}>
            {link.name}
          </div>
        </div>
      ))}
    </div>
  );

}

export default Dropdown;
