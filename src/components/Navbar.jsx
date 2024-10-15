import logo from "../assets/Nlogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return(
        <nav className="mb-20 flex item-center justify-between py-6">
        <div className="felx felx-shrink-0 item-center">
            <img className="mx-20 w-10" src={logo} alt="logo"></img>
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaTwitter />
            <FaInstagram />
        </div>
      </nav>
    );
 
  
};

export default Navbar;