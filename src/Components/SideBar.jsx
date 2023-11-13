import React from "react";
import { BsBookFill } from "react-icons/bs";
import { FaHome, FaInfo, FaPhoneAlt } from "react-icons/fa";

import PropTypes from "prop-types";

const SideBar = ({
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}) => {
  return (
    <div className="container">
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col  justify-center bg-primary text-secondary">
        <SideBarIcon
          icon={<FaHome size="52" />}
          onClick={scrollToHome}
          id="Home"
        />
        <SideBarIcon
          icon={<FaInfo size="52" />}
          onClick={scrollToAbout}
          id="About"
        />
        <SideBarIcon
          icon={<BsBookFill size="52" />}
          onClick={scrollToProjects}
          id="Projects"
        />
        <SideBarIcon
          icon={<FaPhoneAlt size="52" />}
          onClick={scrollToContact}
          id="Contact"
        />
        {/* Add more SidebarIcon components for other components */}
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, onClick, id }) => (
  <div className="sidebar-icon group" onClick={onClick}>
    {icon}
    <a
      href={`#${id}`}
      onClick={(e) => e.preventDefault()}
      className="sidebar-tooltip group-hover:scale-100"
    >
      {id}
    </a>
  </div>
);

SideBarIcon.propTypes = {
  icon: PropTypes.node,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

SideBar.propTypes = {
  scrollToHome: PropTypes.func,
  scrollToAbout: PropTypes.func,
  scrollToProjects: PropTypes.func,
  scrollToContact: PropTypes.func,
  // Add more propTypes for other components as needed
};

export default SideBar;
