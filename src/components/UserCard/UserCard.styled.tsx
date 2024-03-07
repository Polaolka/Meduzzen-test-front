import styled from "@emotion/styled";
import { colors } from "../../constants/index";

import { mediaSizes } from "../../constants/index";

export const UserCardStyled = styled.div`
  position: relative;
  width: 80%;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  align-items: flex-start;

  border-radius: 24px;
  background: ${colors.colorWhite};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-wrap: nowrap;
    padding: 16px;
    gap: 30px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 24px;
    gap: 40px;
  }
`;

export const InfoUserHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;
  align-items: start;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 968px;
    justify-content: space-between;
  }
  & p {
    color: ${colors.colorLigthText};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    gap: 16px;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      justify-content: space-between;
    }

    & :not(:last-child) {
      &:after {
        content: "";
        display: block;
        height: 17px;
        width: 1px;
        background-color: rgba(18, 20, 23, 0.2);
        margin-left: 16px;
      }
    }
  }
  & li {
    display: flex;
    align-items: center;
    & span {
      color: ${colors.colorGreen};
      margin-left: 4px;
    }
  }
`;
export const UserNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  & p {
    color: ${colors.colorLigthText};
    margin: 0;
  }
`;

export const UsersName = styled.h3`
  color: ${colors.colorText};
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;
