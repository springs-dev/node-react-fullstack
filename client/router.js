import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';

import {
    Main,
    HowItWorks,
    WhyUs,
    Pricing,
    About,
    ListNewProperty,
    SignUp,
    SignIn,
    PasswordRecovery,
    ForgotPassword,
    DashboardListingProperty,
    MarketGetOffers,
    MyProperties,
    MyAccount,
    //PropertyLog,
    AdminUsers, AdminUserEdit, AdminProperties
} from './containers';
import { Terms, Privacy } from './components';

export class PagesComponent extends Component {
  render() {
    const { login ,role } = this.props;
    return (
      login ?
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/how_it_works" component={HowItWorks} />
          <Route path="/why_us" component={WhyUs} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          <Route path="/password_recovery" component={PasswordRecovery} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/terms_of_use" component={Terms} />
          <Route path="/privacy_policy" component={Privacy} />
          <Route path="/list_new_property" component={ListNewProperty} />
          <Route path="/my_account" component={MyAccount} />
          <Route path="/dashboard_listing_property" exact component={DashboardListingProperty} />
          <Route path="/dashboard_listing_property/my_properties" exact component={MyProperties} />
          <Route path="/dashboard_listing_property/change_log/:id" component={DashboardListingProperty} />
          <Route path="/dashboard_listing_property/:id" component={DashboardListingProperty} />
          <Route path="/market_get_offers/change_log/:id" component={MarketGetOffers} />
          <Route path="/market_get_offers/:id" component={MarketGetOffers} />
            {
                role==='admin' ?
                    <Route path="/admin/users" exact component={AdminUsers} />
                : null
            }
            {
                role==='admin' ?
                    <Route path="/admin/properties" exact component={AdminProperties} />
                : null
            }
            {
                role==='admin' ?
                    <Route path="/admin/user/:id" exact component={AdminUserEdit} />
                : null
            }

            {
                role==='admin' ?
                    <Redirect to="/admin/users" />
                    : <Redirect to="/dashboard_listing_property/my_properties" />
            }
        </Switch>
        :
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/how_it_works" component={HowItWorks} />
          <Route path="/why_us" component={WhyUs} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/password_recovery" component={PasswordRecovery} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/terms_of_use" component={Terms} />
          <Route path="/privacy_policy" component={Privacy} />
          <Redirect to="/sign_up" />
        </Switch>
    );
  }
}

export const Pages = withRouter(connect(({ state }) => ({ login: state.login, role: state.role }))(PagesComponent));

