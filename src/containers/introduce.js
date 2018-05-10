import React from "react";
// import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Icon } from "react-native-elements";

const ic_1 = require("../image/ic_introduce_1.png");
const ic_2 = require("../image/ic_introduce_2.png");
const ic_3 = require("../image/ic_introduce_3.png");
const ic_4 = require("../image/ic_introduce_4.png");

const styles = StyleSheet.create({
	buttonCircle: {
		width: 40,
		height: 40,
		backgroundColor: "rgba(0, 0, 0, .8)",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center"
	},
	image: {
		width: 320,
		height: 320
	}
});

// slides = [...]

const slides = [
	{
		key: "1",
		title: "SHOES",
		text: "We offer the safest way to buy and sell sneakers .",
		startBrowsing: true,
		icon: ic_1
		// colors: ['#63E2FF', '#B066FE'],
		// colors: ["#63E2FF"]
	},
	{
		key: "2",
		title: "SAFETY FIRST",
		text:
			"All seller photos are verified and all purchaseses are sent to us for verification by our specialists prior to shipping to you .",
		// colors: ['#63E2FF', '#B066FE'],
		// colors: ["#63E2FF"]
		icon: ic_2
	},
	{
		key: "3",
		title: "TRUE MARKET VALUE",
		text:
			"We provide data to help you buy and sell at the right price . You can also make and receive offers to get the true market value .",
		icon: ic_3

		// colors: ["#63E2FF"]
		// colors: ['#A3A1FF', '#3A3897'],
	},
	{
		key: "4",
		title: "EARN MORE MONEY",
		text:
			"We have the lowest commissions in the resale industry and sellers get paid quickly via Paypal or direct deposit .",
		icon: ic_4
	}
];

var mContext;
export default class IntroduceScreen extends React.Component {
	constructor(props) {
		super(props);
		mContext = this;
	}

	_onPressStartBrowsing() {
		mContext.props.navigation.navigate("HomeScreen");
	}

	render() {
		return (
			<AppIntroSlider
				slides={slides}
				// bottomButton
				renderItem={this._renderItem}
				renderDoneButton={this._renderDoneButton}
				renderNextButton={this._renderNextButton}
				onDone={this._onPressStartBrowsing}
				dotColor={"gray"}
				activeDotColor={"black"}
			/>
		);
	}

	_renderNextButton = () => {
		return (
			<View style={styles.buttonCircle}>
				<Icon
					type="ionicon"
					name="md-arrow-round-forward"
					color="rgba(255, 255, 255, .9)"
					size={24}
					style={{ backgroundColor: "transparent" }}
				/>
			</View>
		);
	};
	_renderDoneButton = () => {
		return (
			<View style={styles.buttonCircle}>
				<Icon
					type="ionicon"
					name="md-checkmark"
					color="rgba(255, 255, 255, .9)"
					size={24}
					style={{ backgroundColor: "transparent" }}
				/>
			</View>
		);
	};

	_renderItem = props => {
		let { key } = props;
		if (key == 1) {
			return (
				<View
					// style={{
					// 	flex: 1,
					// 	justifyContent: "center",
					// 	alignItems: "center",
					// 	padding: 40
					// }}

					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "space-around",
						paddingTop: props.topSpacer,
						// paddingBottom: props.bottomSpacer,
						paddingBottom: 100,
						width: props.width,
						height: props.height
					}}
				>
					<Text
						style={{
							color: "black",

							fontSize: 35,
							fontWeight: "bold",
							letterSpacing: 1.0
						}}
					>
						{props.title}
					</Text>

					<Image
						source={props.icon}
						style={{ width: 100, height: 100 }}
					/>
					<Text
						style={{
							color: "gray",
							textAlign: "center",
							paddingRight: 50,
							paddingLeft: 50,
							letterSpacing: 0.5
						}}
					>
						{props.text}
					</Text>
					{this._renderStartBrowsing()}
				</View>
			);
		}
		return (
			<View
				// style={{
				// 	flex: 1,
				// 	justifyContent: "center",
				// 	alignItems: "center",
				// 	padding: 40
				// }}

				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "space-around",
					paddingTop: props.topSpacer,
					// paddingBottom: props.bottomSpacer,
					paddingBottom: 100,
					width: props.width,
					height: props.height
				}}
			>
				<Text
					style={{
						color: "black",

						fontSize: 25,
						fontWeight: "bold",
						letterSpacing: 1.0
					}}
				>
					{props.title}
				</Text>
				<Image
					source={props.icon}
					style={{ width: 100, height: 100 }}
				/>
				<Text
					style={{
						color: "gray",
						textAlign: "center",
						paddingRight: 20,
						paddingLeft: 20,
						letterSpacing: 0.5
					}}
				>
					{props.text}
				</Text>
			</View>
		);
	};

	_renderStartBrowsing() {
		return (
			<TouchableOpacity onPress={this._onPressStartBrowsing}>
				<Text
					style={{
						color: "black",
						letterSpacing: 1.0,
						textDecorationLine: "underline"
					}}
				>
					START BROWSING
				</Text>
			</TouchableOpacity>
		);
	}
}
