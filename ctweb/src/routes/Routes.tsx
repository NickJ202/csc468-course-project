import {Redirect, Route, Switch} from "react-router-dom";

import * as U from "../urls";

import {SignUpView, View} from "../views/Views";

import {SignUp} from "../views/signUp";
import {OrgSignUp} from "../views/signUp/orgSignUp";
import {ContactSignUp} from "../views/signUp/contactSignUp";
import {BillingSignUp} from "../views/signUp/billingSignUp";
import {Account} from "../views/account";
import {Events} from "../views/events";
import {EventsCreate} from "../views/events/create";
import {EventsCreate1} from "../views/events/create/eventsCreate1";
import {EventsCreate2} from "../views/events/create/eventsCreate2";
import {EventsCreate3} from "../views/events/create/eventsCreate3";
import {EventsCreateSummary} from "../views/events/create/eventsCreateSummary";
import {EventsCreateConfirmation} from "../views/events/create/eventsCreateConfirmation";
import {NotFound} from "../views/notFound";


export default function Routes(props: { authenticated: boolean }) {
    return props.authenticated ? (
        <Switch>
            <Route exact path={U.base}>
                <Redirect to={U.events}/>
            </Route>
            <Route exact path={U.events} render={() => <View view={Events}/>}/>
            <Route exact path={U.eventsCreate} render={() => <View view={EventsCreate}/>}/>
            <Route exact path={U.eventsCreate1} render={() => <View view={EventsCreate1}/>}/>
            <Route exact path={U.eventsCreate2} render={() => <View view={EventsCreate2}/>}/>
            <Route exact path={U.eventsCreate3} render={() => <View view={EventsCreate3}/>}/>
            <Route exact path={U.eventsCreateSummary} render={() => <View view={EventsCreateSummary}/>}/>
            <Route exact path={U.eventsCreateConfirmation} render={() => <View view={EventsCreateConfirmation}/>}/>
            <Route exact path={[U.account, U.accountActive]} render={() => <View view={Account}/>}/>
            <Route render={() => <View view={NotFound}/>}/>
        </Switch>
    ) : (
        <Switch>
            <Route exact path={U.base}>
                <Redirect to={U.signUp}/>
            </Route>
            <Route exact path={U.signUp} render={() => <SignUpView view={SignUp}/>}/>
            <Route exact path={U.signUpOrganization} render={() => <SignUpView view={OrgSignUp}/>}/>
            <Route exact path={U.signUpContact} render={() => <SignUpView view={ContactSignUp}/>}/>
            <Route exact path={U.signUpBilling} render={() => <SignUpView view={BillingSignUp}/>}/>
        </Switch>
    )
}