import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import { routes, configInitial } from "./src/config/routes";
import { Provider } from "react-redux";
import getStore from "./src/redux/store";

const navPage = StackNavigator(routes, configInitial);

AppRegistry.registerComponent("Shop", () => navPage);
