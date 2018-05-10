import React, { Component } from "react";
import {
	ListView,
	Image,
	Text,
	View,
	TouchableOpacity,
	FlatList
} from "react-native";
import Shoes from "../model/shoes.js";
import { getDeviceWidth } from "../utils/device_helper";
import ImageLoad from "react-native-image-placeholder";

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
const ic_placeHolder = require("../image/ic_placeholder.png");

export default class ShoesListView extends Component {
	static propTypes: {
		onPressItem: React.PropTypes.func.isRequired,
		data: React.PropTypes.array
	};

	constructor(props) {
		super(props);
		let filter = this.props.filter;
		if (filter == true) {
			offset = 0;
			animMove = new Animated.ValueXY();
		}
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					data={this.props.data}
					numColumns={2}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item, index) => item.getName()}
					renderItem={({ item }) => this._renderRow(item)}
				/>
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
						textAlign: "center",
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
