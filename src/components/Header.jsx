import React from "react";
import styled from "styled-components";

import avatar from "../../public/static/avatar.jpg";

const Head = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 20px 0 10px 0;
    font-size: 36px;
    line-height: 32px;
    font-weight: 700;
  }

  h2 {
    font-size: 22px;
    line-height: 25px;
    font-weight: 400;
    margin-bottom: 30px;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Header = () => {
  return (
    <Head>
      <Avatar src={avatar} alt="Main foto" height={200} />
      <h1>Ludmila Altukhova</h1>
      <h2>Front-end developer</h2>
    </Head>
  );
};

export default Header;
