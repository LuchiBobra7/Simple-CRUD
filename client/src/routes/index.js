import React from "react";
import { Switch } from "react-router-dom";

import Layout from "../components/layout/";
import RouteWithLayout from "../hoc/RouteWithLayout";

import HomePage from "../containers/HomePage";
import PostPage from "../containers/PostPage";
import PostFormPage from "../containers/PostFormPage";

const Routes = () => (
  <Switch>
    <RouteWithLayout 
      layout={Layout} 
      exact path="/" 
      component={HomePage} 
    />
    <RouteWithLayout
      layout={Layout}
      exact
      path="/post/:_id"
      component={PostPage}
    />
    <RouteWithLayout
      layout={Layout}
      exact
      path="/add_post"
      component={PostFormPage}
    />
    <RouteWithLayout
      layout={Layout}
      exact
      path="/edit_post/:_id"
      component={PostFormPage}
    />
  </Switch>
);

export default Routes;
