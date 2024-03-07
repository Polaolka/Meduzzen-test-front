import React from 'react';
import {
  ShowPasswordButton,
  ShowIcon,
  HideIcon,
} from './ShowPassword.styled';

interface ShowPasswordProps {
  isShown: boolean;
  clickHandler: () => void;
}

const ShowPassword: React.FC<ShowPasswordProps> = ({ isShown, clickHandler }) => {
  return (
    <ShowPasswordButton type="button" onClick={clickHandler}>
      {isShown ? <ShowIcon /> : <HideIcon />}
    </ShowPasswordButton>
  );
};

export default ShowPassword;