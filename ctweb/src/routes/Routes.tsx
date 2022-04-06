import { Redirect, Route, Switch } from "react-router-dom";

import * as U from "../urls";

import { AuthView, View } from "../views/Views";

import { LogIn } from "../views/logIn";
import { SignUp } from "../views/signUp";
import { OrgSignUp } from "../views/signUp/orgSignUp";
import { ContactSignUp } from "../views/signUp/contactSignUp";
import { Account } from "../views/account";
import { Events } from "../views/events";
import { EventsCreate } from "../views/events/create";
import { EventsCreateSummary } from "../views/events/create/eventsCreateSummary";
import { EventsCreateConfirmation } from "../views/events/create/eventsCreateConfirmation";
import { NotFound } from "../views/notFound";

export default function Routes(props: { authenticated: boolean }) {
  return props.authenticated ? (
    <Switch>
      <Route exact path={U.base}>
        <Redirect to={U.events} />
      </Route>
      <Route exact path={U.events} render={() => <View view={Events} />} />
      <Route
        exact
        path={U.eventsCreate}
        render={() => <View view={EventsCreate} />}
      />
      <Route
        exact
        path={U.eventsCreateSummary}
        render={() => <View view={EventsCreateSummary} />}
      />
      <Route
        exact
        path={U.eventsCreateConfirmation}
        render={() => <View view={EventsCreateConfirmation} />}
      />
      <Route
        exact
        path={[U.account, U.accountActive]}
        render={() => <View view={Account} />}
      />
      <Route render={() => <View view={NotFound} />} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path={U.base}>
        <Redirect to={U.logIn} />
      </Route>
      <Route
        exact
        path={U.logIn}
        render={() => <AuthView view={LogIn} />}
      />
      <Route
        exact
        path={U.signUp}
        render={() => <AuthView view={SignUp} />}
      />
      <Route
        exact
        path={U.signUpOrganization}
        render={() => <AuthView view={OrgSignUp} />}
      />
      <Route
        exact
        path={U.signUpContact}
        render={() => <AuthView view={ContactSignUp} />}
      />
    </Switch>
  );
}
