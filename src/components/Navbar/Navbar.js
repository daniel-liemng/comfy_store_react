import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.svg";

import NavbarWrapper from "./NavbarWrapper";
import CartButtons from "../CartButtons/CartButtons";
import { useUserContext } from "../../context/userContext";
import { links } from "../../utils/constants";
import { useProductsContext } from "../../context/productsContext";

const Navbar = () => {
  const { openSidebar } = useProductsContext();

  return (
    <NavbarWrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='comfy' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>

        <CartButtons />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
