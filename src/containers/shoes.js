import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import STYLES from "../base/styles";
import ImageLoad from "react-native-image-placeholder";

import { getDeviceWidth } from "../utils/device_helper";

const ic_back = require("../image/ic_back_black.png");
const ic_placeHolder = require("../image/ic_placeholder.png");
var mContext;

export default class ShoesScreen extends Component {
	constructor(props) {
		super(props);
		mContext = this;
		data = this.props.navigation.state.params.data;
	}

	_onPressBack() {
		mContext.props.navigation.pop();
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: "white" }}>
				{this._renderToolbar()}
				{this._renderBody()}
			</View>
		);
	}

	_renderToolbar() {
		return (
			<View>
				<View style={[STYLES.toolbar, { backgroundColor: "white" }]}>
					<TouchableOpacity onPress={this._onPressBack}>
						<Image
							style={{
								marginLeft: 10,
								width: 25,
								height: 25
							}}
							source={ic_back}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	_renderBody() {
		let { data } = this.props.navigation.state.params;
		return (
			<View>
				<View style={{ alignItems: "center" }}>
					<ImageLoad
						backgroundColor={"pink"}
						style={{
							marginTop: 50,
							marginBottom: 50,
							width: getDeviceWidth() - 100,
							height: 200
						}}
						source={{ uri: data.getImage() }}
						placeholderSource={ic_placeHolder}
					/>
				</View>

				{this._renderDivider()}

				<Text
					style={{
						letterSpacing: 0.7,
						marginLeft: 50,
						marginRight: 50,
						textAlign: "center",
						color: "black",
						fontSize: 20,
						fontWeight: "bold"
					}}
				>
					{data.getName()}
				</Text>

				{this._renderDivider()}
				{this._renderPrice()}
			</View>
		);
	}

	_renderPrice() {
		return (
			<View
				style={{
					flexDirection: "row",
					marginLeft: 20,
					marginRight: 20
				}}
			>
				<Text style={{ color: "gray", fontSize: 16 }}> PRICE</Text>
				<Text
					style={{
						flex: 1,
						textAlign: "right",
						color: "black",
						fontSize: 16
					}}
				>
					{data.getPrice()}
				</Text>
			</View>
		);
	}

	_renderDivider() {
		return (
			<View
				style={{
					backgroundColor: "black",
					height: 1,
					marginRight: 25,
					marginLeft: 25,
					marginTop: 20,
					marginBottom: 20
				}}
			/>
		);
	}
}
