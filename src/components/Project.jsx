import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  p {
    font-size: 16px;
    line-height: 22px;
  }

  a {
    color: inherit;
    font-size: 14px;

    &:first-child {
      margin-right: 20px;
    }
  }
`;

const Project = ({ project }) => {
  return (
    <ProjectContainer>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <div>
        <a href={project.linkToProject} target="_blank">
          project
        </a>
        <a href={project.linkToCode} target="_blank">
          code
        </a>
      </div>
    </ProjectContainer>
  );
};

export default Project;
