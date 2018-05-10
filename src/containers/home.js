import React, { Component } from "react";
import {
	Image,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
	StyleSheet
} from "react-native";

import {
	PagerTabIndicator,
	IndicatorViewPager,
	PagerTitleIndicator,
	PagerDotIndicator
} from "rn-viewpager";

import getDeviceHeight from "../utils/device_helper";
import STYLES from "../base/styles";
import TabView from "../components/tabview";
import SearchScreen from "./search";
import DiscoverScreen from "./discover";

var mContext;

export default class HomeScreen extends Component {
	static sComponent = null;
	static navigateToFilterScreen() {
		if (sComponent != null)
			sComponent.props.navigation.navigate("FilterScreen", {
				callbackToHome: this._callbackFromFilter
			});
	}

	constructor(props) {
		super(props);
		sComponent = this;
		mContext = this;
	}

	_onPressBuyNowItem(item) {
		mContext.props.navigation.navigate("ShoesScreen", { data: item });
	}

	_onPressTrendingItem(item) {
		mContext.props.navigation.navigate("ShoesScreen", { data: item });
	}

	_onPressReleaseItem(item) {
		mContext.props.navigation.navigate("ShoesScreen", { data: item });
	}

	render() {
		return (
			<IndicatorViewPager
				style={{ flex: 1 }}
				indicator={this._renderTabIndicator()}
			>
				{this._renderHome()}
				{this._renderSearch()}
				{this._renderDiscover()}
			</IndicatorViewPager>
		);
	}

	_renderHome() {
		return (
			<View>
				<TabView
					onPressBuyNowItem={this._onPressBuyNowItem}
					onPressReleaseItem={this._onPressReleaseItem}
					onPressTrendingItem={this._onPressTrendingItem}
				/>
			</View>
		);
	}

	_renderSearch() {
		return (
			<View>
				<SearchScreen />
			</View>
		);
	}

	_renderDiscover() {
		return (
			<View>
				<DiscoverScreen />
			</View>
		);
	}

	_renderTabIndicator() {
		let tabs = [
			{
				text: "Home ",
				iconSource: ic_home_normal,
				selectedIconSource: ic_home_click
			},
			{
				text: "Search ",
				iconSource: ic_search_normal,
				selectedIconSource: ic_search_click
			},
			{
				text: "Discover ",
				iconSource: ic_discover_normal,
				selectedIconSource: ic_discover_click
			}
		];
		return (
			<PagerTabIndicator
				style={{ backgroundColor: "black" }}
				tabs={tabs}
				itemStyle={{ backgroundColor: "black" }}
				itemSelectedStyle={{ backgroundColor: "black" }}
				iconStyle={{
					marginTop: 4,
					width: 20,
					height: 20
				}}
				textStyle={{
					letterSpacing: 0.6,
					fontSize: 1,
					fontWeight: "bold",
					color: "black"
				}}
				selectedTextStyle={{ color: "white", fontWeight: "bold" }}
				selectedIconStyle={{
					width: 15,
					height: 15,
					transform: [{ scale: 1.2 }]
				}}
			/>
		);
	}
}

const ic_home_normal = require("../image/ic_home_normal.png");
const ic_home_click = require("../image/ic_home_click.png");
const ic_search_normal = require("../image/ic_search_normal.png");
const ic_search_click = require("../image/ic_search_click.png");
const ic_discover_normal = require("../image/ic_discover_normal.png");
const ic_discover_click = require("../image/ic_discover_click.png");
