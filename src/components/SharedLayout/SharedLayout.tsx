import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container, SharedLayoutStyled } from "./SharedLayout.styled";
import { Loader } from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer/>
    </SharedLayoutStyled>
  );
};

export default SharedLayout;
