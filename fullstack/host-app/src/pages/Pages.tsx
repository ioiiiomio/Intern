import React from "react";
const Pages = React.lazy(() =>
  import("referalApp/Pages").then((module) => ({
    default: module.ApplicationPage,
  }))
);

export default Pages;
