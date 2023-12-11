import HomePage from "../containers/HomePage/HomePage";
import PeoplePage from "../containers/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";

const routesConfig = [
  {
    path: "/home",
    exact: true,
    component: HomePage,
  },
  {
    path: "/people/?page=1",
    exact: true,
    component: PeoplePage,
  },
  {
    path: "/people/:id",
    exact: true,
    component: PersonPage,
  },
  {
    path: "/not-found",
    exact: true,
    component: NotFoundPage,
  },
  {
    path: "*",
    exact: false,
    component: NotFoundPage,
  },
];
export default routesConfig;
