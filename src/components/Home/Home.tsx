import Container from "../Container/Container";
import { HomeStyled, MainStyled } from "./Home.styled";
import { useSelector } from "react-redux";
import RootState from "../../redux/RootState";
import Users from "../Users/Users";

function Home(): JSX.Element {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  return (
    <Container>
      <HomeStyled>
        {isAuth ? (
          <Users />
        ) : (
          <MainStyled>Приєднуйся та спілкуйся ;)</MainStyled>
        )}
      </HomeStyled>
    </Container>
  );
}

export default Home;
