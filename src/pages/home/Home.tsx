import React from "react";

import UserListContainer from "./containers/UserListContainer";
import { StyledHome, Title } from "./Home.styles";

function Home() {
  return (
    <StyledHome>
      <header>
        <Title>Top Github Users</Title>
      </header>

      <UserListContainer />
    </StyledHome>
  );
}

export default Home;
