import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div id="footer">
      <Button variant="Outlined">
        <Link to="/blue" className="nav-link">
          Blue
        </Link>
      </Button>
      <Button variant="Outlined">
        <Link to="/red" className="nav-link">
          Red
        </Link>
      </Button>
      <Button variant="Outlined">
        <Link to="/purple" className="nav-link">
          Purple
        </Link>
      </Button>
      <Button>
        <Link to="/" className="nav-link">
          <HomeIcon color="disabled" />
        </Link>
      </Button>
    </div>
  );
};

export default Footer;
