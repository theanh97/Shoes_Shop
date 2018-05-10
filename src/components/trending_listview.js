import React, { Component } from "react";
import { ListView, Image, Text, View, TouchableOpacity } from "react-native";
import Shoes from "../model/shoes.js";
import { getDeviceWidth } from "../utils/device_helper";
import ImageLoad from "react-native-image-placeholder";

const ic_placeHolder = require("../image/ic_placeholder.png");
const ic_increase = require("../image/ic_increase.png");
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class TrendingListView extends Component {
	constructor(props) {
		super(props);
		data = [
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

		this.state = {
			dataSource: ds.cloneWithRows(data)
		};
	}

	_onPressItemShoes(shoes) {
		let name = shoes.getName();
		alert(name);
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
				<Image
					source={ic_increase}
					style={{
						position: "absolute",
						top: 10,
						right: 19,
						width: 17,
						height: 17
					}}
				/>
				<Image
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

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ListView
					pageSize={data.length}
					dataSource={this.state.dataSource}
					renderRow={this._renderRow.bind(this)}
					contentContainerStyle={{
						flexDirection: "row",
						flexWrap: "wrap"
					}}
				/>
			</View>
		);
	}
}
