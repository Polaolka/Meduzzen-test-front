import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMessage } from "../../redux/chat/chatSlice";

import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import {
  MessageCardStyled,
  MessageImg,
  InfoMessageWrapper,
  MessagesContent,
  MessageContentBox,
  MessageImgsWrapper,
  MessageImgThumb,
} from "./MessageCard.styled";
import { Button } from "../Styled/index";
import RootState from "../../redux/RootState";
import { Loader } from "../Loader/Loader";
import { Caption } from "../Form/Form.styled";
import { deleteMessage, editMessage } from "../../redux/chat/chatOperations";

const MessageCard: React.FC<{ Message: IMessage }> = ({ Message }) => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, UnknownAction>>();
  const { messageId, content, imgs, senderName } = Message;
  const chatId = useSelector((state: RootState) => state.chat.chat?.chatId);
  const isLoading = useSelector((state: RootState) => state.chat.isLoading);
  const userId = useSelector((state: RootState) => state.auth.id);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const editMessageHandle = () => {
    setIsEditing(true);
  };
  const saveEditHandle = async () => {
    if (messageId && chatId && userId) {
      const editedData = {
        messageId,
        chatId,
        userId,
        content: editedContent,
      };
      await dispatch(editMessage(editedData));
    }
    setIsEditing(false);
  };
  const deleteMessageHandle = async () => {
    if (messageId && chatId && userId) {
      const data = {
        messageId,
        chatId,
        userId,
      };
      await dispatch(deleteMessage(data));
    }
  };

  return (
    <MessageCardStyled>
      <InfoMessageWrapper>
      <MessageContentBox>
          {isEditing ? (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            <MessagesContent>{content}</MessagesContent>
          )}
          <p>{senderName}</p>
        </MessageContentBox>
        {isLoading ? (
          <Loader />
        ) : (
          <MessageImgsWrapper>
            {imgs?.length > 0 ? (
              imgs?.map((el) => (
                <MessageImgThumb key={el}>
                  <MessageImg alt="Message Img" src={el} />
                </MessageImgThumb>
              ))
            ) : (
              <Caption className="sendMessage">no images</Caption>
            )}
          </MessageImgsWrapper>
        )}
        <MessageContentBox>
          {isEditing ? (
            <Button onClick={saveEditHandle} className="saveBtn">
              Save
            </Button>
          ) : (
            <Button onClick={editMessageHandle} className="editBtn">
              Edit
            </Button>
          )}
          <Button onClick={deleteMessageHandle} className="deleteBtn">
            Delete
          </Button>
        </MessageContentBox>
      </InfoMessageWrapper>
    </MessageCardStyled>
  );
};

export default MessageCard;
