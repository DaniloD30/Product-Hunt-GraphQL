import React from "react";

import Detail from "../views/details/Details";
import SimpleTabs from "../components/tab/TabFilter";
export const routes = [
  {
    path: "/home",
    exact: true,
    title: () => "Home",
    view: () => <SimpleTabs />,
    onlyAuthorized: false,
  },

  {
    path: "/detailPost/:Id",
    exact: true,
    title: () => "Detail",
    view: () => <Detail />,
    onlyAuthorized: false,
  },
];
export default routes;
