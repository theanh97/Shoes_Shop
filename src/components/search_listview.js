import React, { Component } from "react";
import {
	ListView,
	Image,
	Text,
	View,
	TouchableOpacity,
	SectionList,
	ListItem
} from "react-native";

// const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class SearchListView extends Component {
	constructor(props) {
		super(props);
		sections = [
			{
				title: "Category",
				data: ["Basketball", "Running", "Skateboarding"]
			},
			{
				title: "Popular Searchs",
				data: [
					"Ronnie Feg",
					"Doerbecher",
					"Yeezy",
					"Quickstrike",
					"Flyknit",
					"Air Jordan 3",
					"Primeknit",
					"Air Jordan 1",
					"Stan Smith",
					"Infrared"
				]
			}
		];
	}

	_onPressItem(item){
		alert(item);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<SectionList
					style={{
						paddingTop: 20,
						backgroundColor: "white",
						paddingLeft: 30,
						paddingBottom: 30
					}}
					renderItem={({ item, index, section }) => (
						<TouchableOpacity onPress={this._onPressItem.bind(this,item)}>
							<Text
								style={{
									letterSpacing: 0.65,
									paddingLeft: 15,
									paddingBottom: 20,
									fontSize: 10
								}}
								key={index}
							>
								{item}
							</Text>
						</TouchableOpacity>
					)}
					renderSectionHeader={({ section: { title } }) => (
						<Text
							style={{
								paddingBottom: 20,
								fontWeight: "300",
								color: "black",
								letterSpacing: 0.9
							}}
						>
							{title}
						</Text>
					)}
					sections={sections}
					keyExtractor={(item, index) => item + index}
				/>
			</View>
		);
	}
}
