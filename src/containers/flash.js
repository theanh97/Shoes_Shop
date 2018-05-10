import React, { Component } from "react";
import { Text, View, Animated } from "react-native";
import STYLES from "../base/styles";
const LOGO = require("../image/logo.png");

export default class FlashScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			logoOpacity: new Animated.Value(0)
		};
	}

	componentWillMount() {
		Animated.timing(this.state.logoOpacity, {
			toValue: 1.0,
			duration: 1500
		}).start();
	}

	componentDidMount() {
		navigateInterval = setInterval(() => {
			clearInterval(navigateInterval);
			this.props.navigation.navigate("HomeScreen");
		}, 4000);
	}

	render() {
		return (
			<View
				style={[
					STYLES.container,
					{
						justifyContent: "center",
						alignItems: "center"
					}
				]}
			>
				<View
					style={{alignItems: "center" }}
				>
					<Animated.Text
						style={[
							STYLES.logo,
							{
								opacity: this.state.logoOpacity
							}
						]}
					>
						SHOES
					</Animated.Text>
				</View>
			</View>
		);
	}
}
