import React from 'react'
import "./header.css";
import netflixlogo from "../../assets/images/Netflix_Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul className="nav-list">
            <li>
              {" "}
              <img src={netflixlogo} alt="Netflex" />
            </li>
            <li>Home</li>
            <li>TVshow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul className="nav-listL">
            <li> <SearchIcon />  </li>
            <li> <NotificationsOutlinedIcon />     </li>
            <li><AccountBoxIcon/></li>
            <li>< ArrowDropDownCircleIcon/> </li> 
                   
          </ul>
        </div>
      </div>
    </div>
  );
}

export default header