import React from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import routes from "./router";
const APP: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  );
};

export default APP;
