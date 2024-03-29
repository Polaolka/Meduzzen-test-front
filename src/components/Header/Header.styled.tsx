import styled from "@emotion/styled";

import { colors } from "../../constants/index";
import { NavLink } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { mediaSizes } from "../../constants/index";

export const HeaderStyled = styled.header`
  z-index: 10;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: ${colors.colorWhite};
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;

  background-color: ${colors.colorWhite};
`;

export const HeaderLinksBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  &.mobile {
    color: ${colors.colorWhite};
    flex-direction: column;
  }
`;

export const LinkStyled = styled(NavLink)`
  cursor: pointer;
  color: #121417;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  &.activeLink {
    color: ${colors.colorOrange};
    &::after {
      content: "";
      display: block;
      background-color: ${colors.colorOrange};
      width: 100%;
      height: 1px;
    }
  }

  &::after {
    content: "";
    display: block;
    background-color: ${colors.colorOrange};
    width: 0%;
    height: 1px;

  }

  &:hover {
    color: ${colors.colorOrange};
  }

  &:hover,
  &:focus {
    font-weight: 500;
    &::after {
      content: "";
      display: block;
      background-color: ${colors.colorOrange};
      width: 100%;
      height: 1px;
    }
  }
`;

export const LogInIcon = styled(FiLogIn)`
  width: 20px;
  height: 20px;
  color: ${colors.colorGreen};
  margin-right: 8px;
  cursor: pointer;
  &.mobile {
    stroke: ${colors.colorWhite};
  }
`;

export const LogOutIcon = styled(FiLogOut)`
  width: 20px;
  height: 20px;
  color: ${colors.colorOrange};
  margin-right: 8px;
  cursor: pointer;
  &.mobile {
    stroke: ${colors.colorWhite};
  }
`;

export const HelloStyled = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  &.mobile {
    color: ${colors.colorWhite};
  }
`;

export const LogInBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: #121417;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  cursor: pointer;


  &:hover {
    color: ${colors.colorOrange};
  }
  &.mobile {
    color: ${colors.colorWhite};
  }
`;

export const RegistrationBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${colors.colorGreen};
  box-shadow: 0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  color: ${colors.colorWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;



  &:hover {
    opacity: 0.8;
  }
`;
export const MenuButton = styled.button`
  border: none;
  padding: 10px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 14px;
    height: 14px;
    z-index: 10;
  }
`;