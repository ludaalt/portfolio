import React from "react";
import styled from "styled-components";

import Project from "./Project";

const ListContainer = styled.ul`
  width: 100%;
  margin: 20px 0;

  ul {
    padding-left: 40px;

    li {
      font-size: 18px;
      line-height: 32px;
      margin-bottom: 5px;
    }
  }
`;

const ListTitle = styled.h3`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  //border: 3px solid yellow;

  &:hover {
    text-decoration: underline;
  }
`;

const List = ({ data, isLinkList, listTitle, isProjectList }) => {
  return (
    <ListContainer>
      <ListTitle>{listTitle}</ListTitle>
      <ul>
        {data.map((item) =>
          isLinkList ? (
            isProjectList ? (
              <li key={item.title}>
                <Project project={item} />
              </li>
            ) : (
              <li key={item.title}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            )
          ) : (
            <li key={item}>{item}</li>
          )
        )}
      </ul>
    </ListContainer>
  );
};

export default List;
