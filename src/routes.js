import Home from "./pages/Home";
import Weather from "./pages/Weather";

const routes = [
  {
    path: "/weather",
    element: <Weather />,
  },
  {
    path: "/",
    element: <Home />,
  },
];
export default routes;
