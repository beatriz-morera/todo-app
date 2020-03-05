import React from "react";
import { Redirect, Route } from "react-router-dom";

import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactHashRouter } from "@ionic/react-router";

import Welcome from "./pages/Welcome";
import List from "./pages/List";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/background.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactHashRouter>
      <IonRouterOutlet mode="md">
        <Route path="/welcome" component={Welcome} exact={true} />
        <Route path="/list" component={List} exact={true} />
        <Route
          path="/"
          render={() => <Redirect to="/welcome" />}
          exact={true}
        />
      </IonRouterOutlet>
    </IonReactHashRouter>
  </IonApp>
);

export default App;
