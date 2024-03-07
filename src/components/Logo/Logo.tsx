import { LogoStyled, Name } from "./Logo.styled";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <LogoStyled className="logo" to="/">
      <img src={logo} alt="Logo" />
      <Name >
      Meduzzen-chat
      </Name>
    </LogoStyled>
  );
}

export default Logo;