import LogoMontreal from "../assets/Logo_Montreal.png";
import LogoIcon from "../assets/Icon_login.png";
import handleSubscribe from "./unhandledOneClick.js";
import { NavLink } from "react-router-dom";

function TopNavBar() {
  return (
    <div className="top-nav-bar">
      <NavLink to="/" className="logo-container">
        <img
          src={LogoMontreal}
          style={{ height: "2rem" }}
          alt="LogoDeLaVilleDeMtl"
        />
      </NavLink>
      <div className="my-account-container" onClick={handleSubscribe}>
        <img
          src={LogoIcon}
          style={{ height: "1.5rem" }}
          alt="LogoDeMonCompte"
        />
        Mon Compte
      </div>
    </div>
  );
}

export default TopNavBar;
