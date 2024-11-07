import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Header from "./components/Header";
import Progress from './components/Progress'

// for lazy loading -> if it nead it load
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, ssetIsSigndIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={() => ssetIsSigndIn(false)} isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress/>}>
            <switch>
              <Route path="/auth">
                <AuthLazy onSignIn = {() => ssetIsSigndIn(true)}/>
              </Route>
              <Route path="/" component={MarketingLazy} />
            </switch>
          </Suspense>
        </div>
      </StylesProvider> 
    </BrowserRouter>
  );
};
