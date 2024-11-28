import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/index";
import { AuthContext } from "./context";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Грузим</div>
}

return (
    isAuth
    ?
    <Routes>
        {privateRoutes.map(route => 
            <Route
                Component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}
    </Routes>
    :
    <Routes>
        {publicRoutes.map(route => 
            <Route
                Component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}
    </Routes>
);
}
export default AppRouter;
