import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

function Footer() {
  const { themeMode } = useSelector((state) => state.themeMode);

  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-200 p-6">
      <div className="mx-auto max-w-6xl px-8">
        <div className="navbar flex items-center justify-between">
          <div className="logoAndMobile">
            <Link to="/" className="logo hidden lg:block">
              <img
                src={logo}
                alt="Comfy Stores Logo"
                className="lg:w-8/12"
                style={{ filter: themeMode ? "none" : "brightness(20%)" }}
              />
            </Link>
          </div>

          <div className="text-center">
            <p>Comfy Store Furnitures &copy; {year}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
