import styled from "@emotion/styled";
import { colors } from "../../constants/index";
import { HiOutlineHeart } from "react-icons/hi";

import { mediaSizes } from "../../constants/index";
import { transition } from "../../helpers/mixins";

export const MessageCardStyled = styled.div`
  position: relative;
  width: fit-content;
  padding: 12px;

  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: start;

  justify-content: space-between;

  border-radius: 12px;
  border: 1px solid ${colors.colorLightBorder};
  background: ${colors.colorWhite};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    justify-content: space-between;
    padding: 12px;
    gap: 12px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    justify-content: space-between;
    padding: 16px;
    gap: 16px;
  }
`;

export const MessageImgsWrapper = styled.div`
  width: 300px;
  gap: 10px;
  display: flex;
  align-items: start;
  justify-content: start;
`;

export const MessageImgThumb = styled.div`
  width: 92px;
  height: 92px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border: 3px solid #fbe9ba;
  background: #fff;
`;

export const MessageImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoMessageWrapper = styled.div`
flex-wrap: wrap;
  display: flex;
  gap: 8px;
`;

export const InfoMessageList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeartLineStyled = styled(HiOutlineHeart)`
  position: absolute;
  top: 24px;
  right: 24px;

  transform: scale(1);
  cursor: pointer;
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  ${transition("opacity")};
  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;

export const MessageContentBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 8px;
`;

export const MessageSenderName = styled.p`
  color: ${colors.colorLigthText};
  margin: 0;
`;

export const ButtonBox = styled.div`
  /* margin-left: auto; */
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 8px;
`;

export const MessagesContent = styled.p`
  color: ${colors.colorBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
`;
