import Main from "../components/UI/pages/Main/Main";
import Login from "../components/UI/pages/Login/Login";
import AllStats from "../components/UI/pages/AllStats/AllStats";

export const privateRoutes = [
  { path: "/main", component: Main, exact: true },
  { path: "/allstats", component: AllStats, exact: true },
  { path: "*", component: Main, exact: true },
  // Сюда добавляем свои страницы
];

export const publicRoutes = [
  { path: "/login", component: Login, exact: true },
  { path: "*", component: Login, exact: true },
];
