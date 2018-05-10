import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
	Image,
	ListView,
	FlatList,
	ScrollView,
	AsyncStorage
} from "react-native";
import STYLES from "../base/styles";
import { ButtonGroup } from "react-native-elements";
import { Button } from "react-native-elements";
import USSizeFlatList from "../components/us_size_flatlist";
import CategoryFlatList from "../components/category_flatlist";
import * as constants from "../utils/constants";

const ic_back = require("../image/ic_back.png");
// US SIZE
const US_SIZE_TYPES = ["MEN", "WOMEN"];
const US_SIZE_FIGURES = [
	"9.5",
	"10",
	"10.5",
	"11",
	"11.5",
	"12",
	"12.5",
	"13",
	"13.5",
	"14",
	"14.5",
	"15",
	"15.5",
	"16",
	"16.5",
	"17"
];
// CONDITION
const CONDITION_TYPES = ["NEW", "USED"];

// CATEGORY
const CATEGORY_TYPES = [
	{
		id: "basketball",
		imageSourceNormal: require("../image/ic_basketball_normal.png"),
		imageSourceClick: require("../image/ic_basketball_click.png")
	},
	{
		id: "running",
		imageSourceNormal: require("../image/ic_running_normal.png"),
		imageSourceClick: require("../image/ic_running_click.png")
	},
	{
		id: "skateboard",
		imageSourceNormal: require("../image/ic_skateboard_normal.png"),
		imageSourceClick: require("../image/ic_skateboard_click.png")
	}
];

// BRAND
const BRAND_TYPES = [
	{
		id: "basketball",
		imageSourceNormal: require("../image/ic_basketball_normal.png"),
		imageSourceClick: require("../image/ic_basketball_click.png")
	},
	{
		id: "running",
		imageSourceNormal: require("../image/ic_running_normal.png"),
		imageSourceClick: require("../image/ic_running_click.png")
	},
	{
		id: "skateboard",
		imageSourceNormal: require("../image/ic_skateboard_normal.png"),
		imageSourceClick: require("../image/ic_skateboard_click.png")
	}
];

// const dsUSSizeFigures = new ListView.DataSource({
// 	rowHasChanged: (r1, r2) => r1 !== r2
// });
// const dataSourceUSSizeFigures = dsUSSizeFigures.cloneWithRows(US_SIZE_FIGURES);
var mContext;

export default class App extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			selectedUSSizeTypes: [],
			selectedConditionTypes: [],
			countUSSizeTypesSelected: 0,
			countUSSizeFiguresSelected: 0,
			countConditionTypesSelected: 0,
			countCategoryTypesSelected: 0
		};
		mContext = this;
	}

	_onChangeUSSizeTypesSelected() {
		setTimeout(() => {
			mContext.setState({
				countUSSizeTypesSelected: this.state.selectedUSSizeTypes.length
			});
		}, 10);
	}

	_onChangeConditionTypesSelected() {
		setTimeout(() => {
			mContext.setState({
				countConditionTypesSelected: this.state.selectedConditionTypes
					.length
			});
		}, 10);
	}

	_onChangeUSSizeFiguresSelected(count) {
		setTimeout(() => {
			mContext.setState({
				countUSSizeFiguresSelected: count
			});
		}, 10);
	}

	_onChangeCategoryTypesSelected(count) {
		setTimeout(() => {
			mContext.setState({
				countCategoryTypesSelected: count
			});
		}, 10);
	}

	_updateIndex(index) {
		this.setState({ index });
	}

	_onPressApplyFilter() {
		// save countFilters to AsyncStorage
		let {
			countUSSizeTypesSelected,
			countUSSizeFiguresSelected,
			countConditionTypesSelected,
			countCategoryTypesSelected
		} = this.state;
		let countFilters =
			countUSSizeTypesSelected +
			countUSSizeFiguresSelected +
			countConditionTypesSelected +
			countCategoryTypesSelected;
		AsyncStorage.setItem(constants.COUNT_FILTERS, countFilters.toString())
			.catch(error => alert(error))
			.done();

		// back to HomeScreen
		this.props.navigation.pop();
	}

	_onPressBack() {
		// back to HomeScreen
		this.props.navigation.pop();
	}

	_onPressClearAll() {
		this.setState({
			countUSSizeTypesSelected: 0,
			countUSSizeFiguresSelected: 0,
			countConditionTypesSelected: 0,
			countCategoryTypesSelected: 0,
			selectedUSSizeTypes: [],
			selectedConditionTypes: []
		});

		// call function clear selected in USSizeFlatList
		this.refs["USSizeFiguresFlatList"]._clearSelected();
		this.refs["CategoryFlatList"]._clearSelected();

		// call function clear selected in CategoryFlatList
	}

	render() {
		return (
			<View style={STYLES.container}>
				{this._renderToolbar()}
				<View style={{ height: 1, backgroundColor: "white" }} />
				{this._renderFilterBody()}
				{this._renderApplyFilterButton()}
			</View>
		);
	}

	_renderToolbar() {
		let {
			countUSSizeTypesSelected,
			countUSSizeFiguresSelected,
			countConditionTypesSelected,
			countCategoryTypesSelected
		} = this.state;
		console.log("US types size : " + countUSSizeTypesSelected);
		console.log("US figures size : " + countUSSizeFiguresSelected);
		console.log("Condition types size : " + countConditionTypesSelected);
		console.log("Category types size : " + countCategoryTypesSelected);
		let countAll =
			countUSSizeTypesSelected +
			countUSSizeFiguresSelected +
			countConditionTypesSelected +
			countCategoryTypesSelected;

		console.log(countAll);

		return (
			<View
				style={[
					STYLES.toolbar,
					{
						backgroundColor: "black",
						paddingRight: 10,
						paddingLeft: 10
					}
				]}
			>
				<View style={{ flex: 1 }}>
					<TouchableOpacity onPress={this._onPressBack.bind(this)}>
						<Image style={STYLES.toolbarIcon} source={ic_back} />
					</TouchableOpacity>
				</View>

				<View style={{ flex: 1 }}>
					<Text
						style={{
							alignSelf: "center",
							color: "white",
							fontWeight: "bold",
							letterSpacing: 2
						}}
					>
						{countAll == 0 ? "FILTER" : "FILTER : " + countAll}
					</Text>
				</View>

				<View style={{ flex: 1 }}>
					<TouchableOpacity
						onPress={this._onPressClearAll.bind(this)}
					>
						<Text
							style={{
								alignSelf: "flex-end",
								color: "white"
							}}
						>
							Clear All
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	_renderFilterBody() {
		return (
			<ScrollView style={{ flex: 1 }}>
				{this._renderUSSize()}
				{this._renderCondition()}
				{this._renderCategory()}
			</ScrollView>
		);
	}

	_renderUSSize() {
		return (
			<View>
				<View
					style={{
						height: 60,
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Text
						style={{
							fontWeight: "bold",
							alignSelf: "center",
							textAlign: "center",
							letterSpacing: 0.8,
							color: "white",
							fontSize: 16
						}}
					>
						US SIZE
					</Text>
				</View>
				<ButtonGroup
					innerBorderStyle={{ width: 0, color: "transparent" }}
					containerStyle={{
						height: 30,
						borderWidth: 0,
						backgroundColor: "transparent",
						justifyContent: "space-around"
					}}
					buttonStyle={{
						backgroundColor: "gray"
					}}
					buttons={US_SIZE_TYPES}
					selectMultiple
					selectedButtonStyle={{
						backgroundColor: "white"
					}}
					selectedIndexes={this.state.selectedUSSizeTypes}
					textStyle={{ color: "black" }}
					selectedTextStyle={{ color: "black" }}
					onPress={selectedUSSizeTypes => {
						this.setState({ selectedUSSizeTypes });
						this._onChangeUSSizeTypesSelected();
					}}
				/>
				<View style={{ marginTop: 20 }}>
					<USSizeFlatList
						ref={"USSizeFiguresFlatList"}
						onChangeFilterCounts={
							this._onChangeUSSizeFiguresSelected
						}
						data={US_SIZE_FIGURES}
					/>
				</View>
			</View>
		);
	}

	_renderCondition() {
		return (
			<View>
				<View
					style={{
						marginLeft: 10,
						marginRight: 10,
						marginTop: 20,
						backgroundColor: "white",
						height: 1
					}}
				/>
				<View
					style={{
						height: 60,
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Text
						style={{
							fontWeight: "bold",
							alignSelf: "center",
							textAlign: "center",
							letterSpacing: 0.8,
							color: "white",
							fontSize: 16
						}}
					>
						CONDITION
					</Text>
				</View>

				<ButtonGroup
					innerBorderStyle={{ width: 0, color: "transparent" }}
					containerStyle={{
						height: 30,
						borderWidth: 0,
						backgroundColor: "transparent",
						justifyContent: "space-around"
					}}
					buttonStyle={{
						backgroundColor: "gray"
					}}
					buttons={CONDITION_TYPES}
					selectMultiple
					selectedButtonStyle={{
						backgroundColor: "white"
					}}
					selectedIndexes={this.state.selectedConditionTypes}
					textStyle={{ color: "black" }}
					selectedTextStyle={{ color: "black" }}
					onPress={selectedConditionTypes => {
						this.setState({ selectedConditionTypes });
						this._onChangeConditionTypesSelected();
					}}
				/>
			</View>
		);
	}

	_renderCategory() {
		return (
			<View>
				<View
					style={{
						marginLeft: 10,
						marginRight: 10,
						marginTop: 20,
						backgroundColor: "white",
						height: 1
					}}
				/>
				<View
					style={{
						height: 60,
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Text
						style={{
							fontWeight: "bold",
							alignSelf: "center",
							textAlign: "center",
							letterSpacing: 0.8,
							color: "white",
							fontSize: 16
						}}
					>
						CATEGORY
					</Text>
				</View>

				<View>
					<CategoryFlatList
						ref={"CategoryFlatList"}
						onChangeFilterCounts={
							this._onChangeCategoryTypesSelected
						}
						data={CATEGORY_TYPES}
					/>
				</View>
			</View>
		);
	}

	_renderRowOfUSSizeFigures(item) {
		return (
			<Button
				buttonStyle={{
					width: 47,
					height: 30,
					marginLeft: 0,
					backgroundColor: "gray"
				}}
				fontSize={11}
				textStyle={{ color: "black" }}
				title={item}
				borderRadius={2}
			/>
		);
	}

	_renderApplyFilterButton() {
		return (
			<Button
				title={"APPLY FILTER"}
				textStyle={{ fontSize: 12, letterSpacing: 1.5, color: "black" }}
				buttonStyle={{ backgroundColor: "white" }}
				onPress={this._onPressApplyFilter.bind(this)}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});
