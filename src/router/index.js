import Main from "../components/UI/pages/Main/Main";
import Login from "../components/UI/pages/Login/Login";

export const privateRoutes = [
  { path: "/Main", component: Main, exact: true },
  { path: "*", component: Main, exact: true },
  // Сюда добавляем свои страницы
];

export const publicRoutes = [
  { path: "/Login", component: Login, exact: true },
  { path: "*", component: Login, exact: true },
];
