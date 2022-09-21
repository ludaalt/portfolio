import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Social from "./components/Social";
import Skills from "./components/Skills";
import ProjectsList from "./components/ProjectsList";

const AppWrapper = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 350px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Social />
      <Skills />
      <ProjectsList />
    </AppWrapper>
  );
};

export default App;
