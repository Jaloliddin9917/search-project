import "./sidebar.scss";
import icon from "../../../assets/images/CBU_Logo.png"
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";
import { FaRegArrowAltCircleRight } from "@react-icons/all-files/fa/FaRegArrowAltCircleRight";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/borrower" style={{ textDecoration: "none" }}>
          <span className="logo"><img style={{width: "50px", height: "50px"}} src={icon} alt="icon" /></span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/borrower" style={{ textDecoration: "none" }}>
            <li>
              <FaRegArrowAltCircleRight style={{ color: "#0f4d8b"}} />
              <span>Заёмщик</span>
            </li>
          </Link>
          <Link to="/applications" style={{ textDecoration: "none" }}>
            <li>
              <FaRegArrowAltCircleRight style={{ color: "#0f4d8b" }} />
              <span>Заявки</span>
            </li>
          </Link>
          <Link to="/agreement" style={{ textDecoration: "none" }}>
            <li>
              <FaRegArrowAltCircleRight style={{ color: "#0f4d8b" }} />
              <span>Договор</span>
            </li>
          </Link>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
