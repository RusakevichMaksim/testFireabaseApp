import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ROUTES } from "../constant";
import { Home, NotFound, PageTwo, Login, EditCard, AddCard } from "../pages";
import { useAuthContext } from "./AuthContext";

export const RouterContext = React.createContext({});

const routes = [
  { path: ROUTES.home, component: Home, exact: true },
  { path: ROUTES.pageTwo, component: PageTwo, exact: true },
  { path: ROUTES.login, component: Login, exact: true },
  { path: ROUTES.editCard + ":id", component: EditCard, exact: true },
  { path: ROUTES.addCard, component: AddCard, exact: true },
];

export const useShoppingCartContext = () => {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error(
      "useShoppingCartContext must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

type ProtectedProps = {
  path: string;
  component: any;
};

const ProtectedRoute = ({
  path,
  component: Component,
  ...props
}: ProtectedProps) => {
  const { isAuth } = useAuthContext();

  if (path === ROUTES.login) {
    if (isAuth) return <Redirect to={ROUTES.home} />;
    return <Component {...props} />;
  }

  if (isAuth) {
    return <Component {...props} />;
  }

  return <Redirect to={ROUTES.login} />;
};

export const RouterProvider = () => {
  return (
    <RouterContext.Provider value={{}}>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(props) => <ProtectedRoute {...props} {...route} />}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </RouterContext.Provider>
  );
};
