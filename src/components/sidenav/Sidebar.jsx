import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    // FaThList
}from "react-icons/fa";

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Demographics",
            icon:<FaTh/>
        },
        {
            path:"/AcitivityLog",
            name:"AcitivityLog",
            icon:<FaUserAlt/>
        },
        {
            path:"/Revenue",
            name:"Revenue",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Inbox",
            name:"Inbox",
            icon:<FaCommentAlt/>
        },
        {
            path:"/communications",
            name:"Communicaitons",
            icon:<FaShoppingBag/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                    {/* <Typography>Reports</Typography> */}
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;