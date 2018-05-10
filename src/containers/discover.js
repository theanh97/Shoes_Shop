import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import STYLES from "../base/styles";
import CollectionSlideImage from "../components/collection_slide_image";
import OnfeetOnGoatStaggerGridView from "../components/onfeet_on_goat_stagger_gridview";

export default class DiscoverScreen extends Component {
	render() {
		return (
			<ScrollView
				style={[STYLES.container, { backgroundColor: "white" }]}
			>
				{this._renderCollections()}
				{this._renderOnFeetOnGoat()}
			</ScrollView>
		);
	}

	_renderCollections() {
		return (
			<View>
				<View
					style={{
						height: 70,
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Text
						style={{
							fontSize: 9.5,
							letterSpacing: 0.8,
							fontWeight: "bold",
							color: "black"
						}}
					>
						COLLECTIONS
					</Text>
				</View>

				<View style={{ height: 200 }}>
					<CollectionSlideImage />
				</View>
			</View>
		);
	}

	_renderOnFeetOnGoat() {
		return (
			<View style={{ flex: 1 }}>
				<View
					style={{
						height: 70,
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Text
						style={{
							fontSize: 9.5,
							letterSpacing: 0.9,
							fontWeight: "bold",
							color: "black"
						}}
					>
						ONFEET ON GOAT
					</Text>
				</View>

				<View style={{ flex: 1, justifyContent: 'center' }}>
					<OnfeetOnGoatStaggerGridView />
				</View>
			</View>
		);
	}
}
