import Home from "@/pages/Home";
import { RouteConfig } from "react-router-config";
import PageA from "@/pages/PageA";
import PageB from "@/pages/PageB";
const routes: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    routes: [],
    exact: true,
  },
  {
    path: "/a",
    component: PageA,
  },
  {
    path: "/b",
    component: PageB,
  },
];

export default routes;
