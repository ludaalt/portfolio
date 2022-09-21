import React from "react";
import Link from "./List";

const skills = [
  "Javascript",
  "React (React Hooks, JSX)",
  "State Management (Redux)",
  "TypeScript",
  "Jest",
  "HTML5 (semantic, accessibility)",
  "CSS / SCSS",
  "Material UI",
  "styled components",
  "Git",
  "Figma",
  "Docker",
  "Gulp",
  "Webpack",
];

const Skills = () => {
  return <Link data={skills} isLinkList={false} listTitle="Skills" />;
};

export default Skills;
