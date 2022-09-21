import React from "react";
import List from "./List";

const projects = [
  {
    title: "Plant Shop",
    description: "Flower online shop",
    linkToProject: "https://plant-shop-git-main-ludaalt.vercel.app/",
    linkToCode: "https://github.com/ludaalt/Plant_Shop",
  },
  {
    title: "Hungry People",
    description: "Restaurant landing page",
    linkToProject: "https://hungry-people-lilac.vercel.app/",
    linkToCode: "https://github.com/ludaalt/Hungry_People",
  },
  {
    title: "Todo",
    description:
      "This is a list of work tasks, a list of pending cases, a shopping list and much more",
    linkToProject: "#",
    linkToCode: "https://github.com/ludaalt/todoapp",
  },
  {
    title: "Hacker News",
    description: "Interface for Hacker News website",
    linkToProject: "https://hacker-news-app-sigma.vercel.app/",
    linkToCode: "https://github.com/ludaalt/hacker_news_app",
  },
  {
    title: "Tamagotchi",
    description: "Simple Tamagotchi game",
    linkToProject: "#",
    linkToCode: "https://github.com/ludaalt/tamagotchi",
  },
  {
    title: "Calculator",
    description:
      "Application that performs all the basic mathematical operations",
    linkToProject: "https://calculator-ludaalt.vercel.app/",
    linkToCode: "https://github.com/ludaalt/calculator",
  },
  {
    title: "Word Transform",
    description: "Application that declines a word by cases",
    linkToProject: "https://word-transform.vercel.app/",
    linkToCode: "https://github.com/ludaalt/word_transform",
  },
  {
    title: "Weather App",
    description:
      "An application that helps you find out the weather in the right city",
    linkToProject: "#",
    linkToCode: "https://github.com/ludaalt/weatherapp",
  },
];

const ProjectsList = () => {
  return <List data={projects} isLinkList isProjectList listTitle="Projects" />;
};

export default ProjectsList;
