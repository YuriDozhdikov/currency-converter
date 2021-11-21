import {Link} from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div className="headerContent">
      <Link to={"/"}>
        <div className="links">Currency Converter</div>
      </Link>
      <Link to={"/current"}>
        <div className="links">Current exchange rates</div>
      </Link>
    </div>
  );
}

export default Header;
