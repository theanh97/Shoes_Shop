import React, { Component } from "react";
import {
	ListView,
	Image,
	Text,
	View,
	TouchableOpacity,
	Button,
	LayoutAnimation,
	Platform,
	UIManager,
	Animated,
	TouchableHighlight,
	AsyncStorage
} from "react-native";
import Shoes from "../model/shoes.js";
import { getDeviceWidth } from "../utils/device_helper";
import ImageLoad from "react-native-image-placeholder";
import HomeScreen from "../containers/home";
import * as constants from "../utils/constants";

const ic_placeHolder = require("../image/ic_placeholder.png");
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

if (Platform.OS == "android") {
	UIManager.setLayoutAnimationEnabledExperimental &&
		UIManager.setLayoutAnimationEnabledExperimental(true);
}

function moveUpOrDownAnimation(up, animValueXY) {
	if (up) {
		Animated.timing(animValueXY, {
			toValue: {
				x: 0,
				y: 0
			},
			duration: 200
		}).start();
	} else {
		Animated.timing(animValueXY, {
			toValue: {
				x: 0,
				y: 200
			},
			duration: 200
		}).start();
	}
}

export default class BuyNowListView extends Component {
	constructor(props) {
		super(props);
		offset = 0;
		data = [
			new Shoes(
				"100$",
				"https://m.media-amazon.com/images/I/81nHM+E3vKL._SX480_.jpg",
				"adidas Golf Tech Response"
			),
			new Shoes(
				"320$",
				"https://m.media-amazon.com/images/I/81NaZOKaAdL._SX480_.jpg",
				"Nike Golf Explorer 2"
			),
			new Shoes(
				"189$",
				"https://m.media-amazon.com/images/I/71tWxwBH1rL._SX480_.jpg",
				"Nike Golf Lunar Command 2"
			),
			new Shoes(
				"270$",
				"https://m.media-amazon.com/images/I/81y8iUHe38L._SX480_.jpg",
				"FootJoy FJ Hydrolite Athletic Shoe"
			),
			new Shoes(
				"350$",
				"https://m.media-amazon.com/images/I/81LtkfCszIL._SX480_.jpg",
				"ECCO Golf Biom Hybrid 3 Boa"
			),
			new Shoes(
				"100$",
				"https://m.media-amazon.com/images/I/81-4DWBwRkL._SX480_.jpg",
				"New Balance Golf NBG3001"
			)
		];
		var countFilters = 0;
		AsyncStorage.getItem(constants.COUNT_FILTERS)
			.then(value => {
				if (value != null) countFilters = value;
			})
			.catch(error => alert(error))
			.done();

		animMove = new Animated.ValueXY();
		this.state = {
			dataSource: ds.cloneWithRows(data),
			isShowFilter: true,
			animMoveFilterButton: animMove
		};
	}

	_onPressItemShoes(shoes) {
		this.props._onPressItemShoes();
	}

	_onPressFilter() {
		HomeScreen.navigateToFilterScreen();
	}

	_onScroll(event) {
		let currentOffset = event.nativeEvent.contentOffset.y;
		const dif = currentOffset - (this.offset || 0);
		let { isShowFilter } = this.state;
		if (Math.abs(dif) < 3) {
		} else if (dif < 0 && isShowFilter == false) {
			// scroll up => show
			this.setState({ isShowFilter: true });
			// move animation
			moveUpOrDownAnimation(true, this.state.animMoveFilterButton);
		} else {
			if (isShowFilter == true) {
				// scroll down => hide
				this.setState({ isShowFilter: false });
				// move animation
				moveUpOrDownAnimation(false, this.state.animMoveFilterButton);
			}
		}

		this.offset = currentOffset;
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: "center" }}>
				<ListView
					onScroll={this._onScroll.bind(this)}
					pageSize={data.length}
					dataSource={this.state.dataSource}
					renderRow={this._renderRow.bind(this)}
					contentContainerStyle={{
						flexDirection: "row",
						flexWrap: "wrap"
					}}
				/>
				{this._renderFitlerButton()}
			</View>
		);
	}

	_renderFitlerButton() {
		return (
			<View>
				<Animated.Text
					onPress={this._onPressFilter.bind(this)}
					style={{
						transform: this.state.animMoveFilterButton.getTranslateTransform(),
						flex: 1,
						justifyContent: "center",
						alignSelf: "center",
						position: "absolute",
						paddingTop: 6,
						paddingBottom: 6,
						paddingLeft: 30,
						paddingRight: 30,
						bottom: 15,
						backgroundColor: "black",
						letterSpacing: 0.9,
						color: "white",
						fontSize: 10
					}}
				>
					FILTER
				</Animated.Text>
			</View>
		);
		// }
		// return null;
	}

	_renderRow(shoes) {
		let image = shoes.getImage();
		let name = shoes.getName();
		let price = shoes.getPrice();
		return (
			<TouchableOpacity
				// onPress={this._onPressItemShoes.bind(this, shoes)}
				// onPress={item => this.props.onPressItem(item)}
				onPress={() => this.props.onPressItem(shoes)}
				style={{
					justifyContent: "center",
					margin: 0.5,
					alignItems: "center",
					backgroundColor: "white",
					width: getDeviceWidth() / 2 - 1,
					height: 250
				}}
			>
				<Text
					style={{
						letterSpacing: 0.9,
						color: "black",
						position: "absolute",
						top: 10,
						right: 19,
						fontSize: 10
					}}
				>
					{price}
				</Text>
				<ImageLoad
					style={{
						width: 120,
						height: 100
					}}
					source={{ uri: image }}
					placeholderSource={ic_placeHolder}
				/>
				<Text style={{ fontSize: 10 }}>{name}</Text>
			</TouchableOpacity>
		);
	}
}
