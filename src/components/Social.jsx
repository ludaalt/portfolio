import React from "react";

import List from "./List";

const social = [
  { title: "github", link: "https://github.com/ludaalt" },
  { title: "telegram", link: "https://t.me/ludaalt" },
  { title: "luda.tamb@mail.ru", link: "mailto:luda.tamb@mail.ru" },
];

const Social = () => {
  return <List data={social} isLinkList listTitle="Social" />;
};

export default Social;
