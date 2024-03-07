import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container/Container";
import { Caption } from "../Form/Form.styled";
import { Loader } from "../Loader/Loader";
import UserCard from "../UserCard/UserCard";
import { getUsers } from "../../redux/user/operations";
import RootState from "../../redux/RootState";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { UsersStyled } from "./Users.styled";

function Users() {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, UnknownAction>>();
  const users = useSelector((state: RootState) => state.user.users);
  const currentUserId = useSelector((state: RootState) => state.auth.id);
  const filteredUsers = users.filter((el) => ( el.id !== currentUserId))

  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <Container>

      {isLoading?(<Loader/>):(<UsersStyled>
        {filteredUsers?.length > 0 ? (
          filteredUsers?.map((el) => (
            <UserCard key={el.id} User={el} />
          ))
        ) : (
          <Caption>Unfortunately, no user was found.</Caption>
        )}
      </UsersStyled>)}
    </Container>
  );
}

export default Users;
