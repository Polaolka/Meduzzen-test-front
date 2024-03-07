import React, { ReactNode } from "react";
import { MessageStyled } from "./Message.styled";
import { IoWarningOutline } from "react-icons/io5";

interface MessageProps {
  type: "error" | "other";
  children: ReactNode;
}

const Message: React.FC<MessageProps> = ({ type, children }) => {
  return (
    <MessageStyled>
      <div>
        {type === "error" && <IoWarningOutline />}
        {children}
      </div>
    </MessageStyled>
  );
};

export default Message;
