import React from "react";
import Demochart from "../../images/Demochart.svg";
import Sideactivity from "../../images/Sideactivity.svg";
import Revenuechart from "../../images/Revenuechart.svg";
import Sidemail from "../../images/Sidemail.svg";
import Communicationicon from "../../images/Communicationicon.svg";

// import {
//   // FaTh,
//   // FaBars,
//   // FaUserAlt,
//   // FaRegChartBar,
//   // FaCommentAlt,
//   // FaShoppingBag,
//   // FaThList
// } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Demographics",
      icon: <img src={Demochart} alt="demochart" style={{color:"#006ACC"}} />,
    },
    {
      path: "/AcitivityLog",
      name: "AcitivityLog",
      icon: <img src={Sideactivity} alt="sidebar_activity" />,
    },
    {
      path: "/Revenue",
      name: "Revenue",
      icon: <img src={Revenuechart} alt="revenuechart" />,
    },
    {
      name: <div className="nav_manage" >Manage</div>
    },
    {
      path: "/Inbox",
      name: "Inbox",
      icon: <img src={Sidemail} alt="sidemail" />,
    },
    {
      path: "/communications",
      name: "Communicaitons",
      icon: <img src={Communicationicon} alt="Communicationicon" />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
          <div className="bars">
            
            {/* <FaBars onClick={toggle} /> */}
            {/* <Typography>Reports</Typography> */}
          </div>
        </div>  
        <span className="sidenav_reports" >Reports</span>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            // activeclassName="active"
          >
            <div className="icon" >{item.icon}</div>
            <div
              // style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
