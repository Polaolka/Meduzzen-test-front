import { useSelector } from "react-redux";
import { User as IUser } from "../../redux/user/slice";
import { useNavigate } from "react-router-dom";
import {
  UserCardStyled,
  InfoUserHeader,
  UsersName,
  UserNameBox,
} from "./UserCard.styled";
import { Button } from "../Styled/index";
import RootState from "../../redux/RootState";

const UserCard: React.FC<{ User: IUser }> = ({ User }) => {
  const navigate = useNavigate();
  const { id, name } = User;
  const currentUserId = useSelector((state: RootState) => state.auth.id);

  function generateChatId (user1Id: string, user2Id: string) {
    const sortedIds = [user1Id, user2Id].sort();
    return `${sortedIds[0]}_${sortedIds[1]}`;
  }

  const openChatHandle = () => {
    if (currentUserId) {

      const chatId = generateChatId(currentUserId, id);
      navigate(`/chat/${chatId}`);
    }
  };

  return (
    <>
      <UserCardStyled>
        <InfoUserHeader>
          <UserNameBox>
            <p>User`s name</p>
            <UsersName>{name}</UsersName>
          </UserNameBox>
        </InfoUserHeader>
        <Button onClick={openChatHandle}>Open chat</Button>
      </UserCardStyled>
    </>
  );
};

export default UserCard;
