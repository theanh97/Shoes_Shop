import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	Platform
} from "react-native";
import STYLES from "../base/styles";
import SearchListView from "../components/search_listview";

const ic_search = require("../image/ic_search_normal.png");
const ic_cancel = require("../image/ic_cancel.png");
const ic_about = require("../image/ic_about.png");

export default class SearchScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocus: false
		};
	}

	_onPressCancel() {
		this.refs["searchInput"].clear();
		this.refs["searchInput"].blur();
	}

	_onPressAbout() {}

	render() {
		return (
			<View style={STYLES.container}>
				<View>{this._renderToolbar()}</View>
				<SearchListView />
			</View>
		);
	}

	_renderToolbar() {
		return (
			<View style={[STYLES.toolbar, { backgroundColor: "white" }]}>
				<Image
					style={{ marginLeft: 10, width: 15, height: 15 }}
					source={ic_search}
				/>

				{this._renderSearchInput()}

				<TouchableOpacity onPress={this._onPressCancel.bind(this)}>
					<Image
						style={{ width: 13, height: 13, marginRight: 30 }}
						source={ic_cancel}
					/>
				</TouchableOpacity>

				<TouchableOpacity onPress={this._onPressAbout.bind(this)}>
					<Image
						style={{ width: 17, height: 17, marginRight: 10 }}
						source={ic_about}
					/>
				</TouchableOpacity>
			</View>
		);
	}

	_renderSearchInput() {
		if (Platform.OS == "android") {
			return (
				<TextInput
					ref={"searchInput"}
					placeholderTextColor={"gray"}
					borderBottomColor={"white"}
					underlineColorAndroid={"transparent"}
					style={{
						marginLeft: 10,
						marginRight: 5,
						flex: 1,
						fontSize: 10
					}}
					placeholder="Search by Name or SKU"
				/>
			);
		}

		return (
			<TextInput
				ref={"searchInput"}
				placeholderTextColor={"gray"}
				borderBottomColor={"white"}
				style={{ marginLeft: 5, marginRight: 5, flex: 1 }}
				placeholder="Search by Name or SKU"
			/>
		);
	}
}
