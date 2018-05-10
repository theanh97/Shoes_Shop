import * as React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import Shoes from "../model/shoes.js";

import BuyNowListView from "../components/buy_now_listview";
// import ReleasesListView from "../components/releases_listview";
// import TrendingListView from "../components/trending_listview";
import ShoesListView from "../components/shoes_listview";

var mContext;
const releasesData = [
	new Shoes(
		"THG 4\n24",
		"https://m.media-amazon.com/images/I/81nHM+E3vKL._SX480_.jpg",
		"adidas Golf Tech Response"
	),
	new Shoes(
		"THG 4\n25",
		"https://m.media-amazon.com/images/I/81NaZOKaAdL._SX480_.jpg",
		"Nike Golf Explorer 2"
	),
	new Shoes(
		"THG 4\n26",
		"https://m.media-amazon.com/images/I/71tWxwBH1rL._SX480_.jpg",
		"Nike Golf Lunar Command 2"
	),
	new Shoes(
		"THG 4\n26",
		"https://m.media-amazon.com/images/I/81y8iUHe38L._SX480_.jpg",
		"FootJoy FJ Hydrolite Athletic Shoe"
	),
	new Shoes(
		"THG 4\n27",
		"https://m.media-amazon.com/images/I/81LtkfCszIL._SX480_.jpg",
		"ECCO Golf Biom Hybrid 3 Boa"
	),
	new Shoes(
		"THG 4\n28",
		"https://m.media-amazon.com/images/I/81-4DWBwRkL._SX480_.jpg",
		"New Balance Golf NBG3001"
	)
];

const trendingData = [
	new Shoes(
		"THG 4\n24",
		"https://m.media-amazon.com/images/I/81nHM+E3vKL._SX480_.jpg",
		"adidas Golf Tech Response"
	),
	new Shoes(
		"THG 4\n25",
		"https://m.media-amazon.com/images/I/81NaZOKaAdL._SX480_.jpg",
		"Nike Golf Explorer 2"
	),
	new Shoes(
		"THG 4\n26",
		"https://m.media-amazon.com/images/I/71tWxwBH1rL._SX480_.jpg",
		"Nike Golf Lunar Command 2"
	),
	new Shoes(
		"THG 4\n26",
		"https://m.media-amazon.com/images/I/81y8iUHe38L._SX480_.jpg",
		"FootJoy FJ Hydrolite Athletic Shoe"
	),
	new Shoes(
		"THG 4\n27",
		"https://m.media-amazon.com/images/I/81LtkfCszIL._SX480_.jpg",
		"ECCO Golf Biom Hybrid 3 Boa"
	),
	new Shoes(
		"THG 4\n28",
		"https://m.media-amazon.com/images/I/81-4DWBwRkL._SX480_.jpg",
		"New Balance Golf NBG3001"
	)
];

const initialLayout = {
	height: 0,
	width: Dimensions.get("window").width
};

const FirstRoute = () => (
	<BuyNowListView
		onPressItem={item => mContext.props.onPressBuyNowItem(item)}
	/>
);
const SecondRoute = () => (
	<ShoesListView
		data={data}
		onPressItem={item => mContext.props.onPressReleaseItem(item)}
	/>
);
const ThirdRoute = () => (
	<ShoesListView
		data={data}
		onPressItem={item => mContext.props.onPressTrendingItem(item)}
	/>
);

export default class TabView extends React.Component {
	constructor(props) {
		super(props);
		mContext = this;
	}

	state = {
		index: 0,
		routes: [
			{ key: "first", title: "BUY NOW" },
			{ key: "second", title: "RELEASES" },
			{ key: "third", title: "TRENDING" }
		]
	};

	_handleIndexChange = index => this.setState({ index });

	_renderHeader = props => (
		<TabBar
			{...props}
			style={{ backgroundColor: "white" }}
			labelStyle={{
				color: "gray",
				fontSize: 9,
				fontWeight: "bold",
				letterSpacing: 2
			}}
			pressColor={"black"}
			indicatorStyle={{ backgroundColor: "black" }}
		/>
	);

	_renderScene = SceneMap({
		first: FirstRoute,
		second: SecondRoute,
		third: ThirdRoute
	});

	render() {
		return (
			<TabViewAnimated
				navigationState={this.state}
				renderScene={this._renderScene}
				renderHeader={this._renderHeader}
				onIndexChange={this._handleIndexChange}
				initialLayout={initialLayout}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
