import logo from '../../assets/logo.png'
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
