import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import SidebarWrapper from "./SidebarWrapper";
import CartButtons from "../CartButtons/CartButtons";
import logo from "../../assets/logo.svg";
import { links } from "../../utils/constants";
import { useProductsContext } from "../../context/productsContext";

const Sidebar = () => {
  // context
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <SidebarWrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className='sidebar-header'>
          <img src={logo} alt='comfy' className='logo' />
          <button type='button' className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className='links'>
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {text}
              </Link>
            </li>
          ))}

          <li>
            <Link to='/checkout' onClick={closeSidebar}>
              Checkout
            </Link>
          </li>
        </ul>

        <CartButtons />
      </aside>
    </SidebarWrapper>
  );
};

export default Sidebar;
