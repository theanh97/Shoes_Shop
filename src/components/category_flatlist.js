import React, { PureComponent } from "react";
import { FlatList, View, TouchableOpacity, Text, Image } from "react-native";
import { Button } from "react-native-elements";

export default class CategoryFlatList extends PureComponent {
	state = { selected: (new Map(): Map<string, boolean>) };

	// _keyExtractor = (item, index) => item.id;
	_keyExtractor = (item, index) => item.id;

	_onPressItem = (id: string) => {
		// updater functions are preferred for transactional updates
		this.setState(state => {
			// copy the map rather than modifying state.
			const selected = new Map(state.selected);
			selected.set(id, !selected.get(id)); // toggle
			return { selected };
		});
		// this._countSelectedItems;
		setTimeout(() => {
			let { selected } = this.state;
			let count = 0;
			selected.forEach((value, key) => {
				if (value) count++;
			});

			this.props.onChangeFilterCounts(count);
		}, 1);
	};

	_clearSelected() {
		this.setState({
			selected: (new Map(): Map<string, boolean>)
		});
	}

	_countSelectedItems() {
		alert("counte selected items");
		let { selected } = this.state;
		let filteredArr = selected.filter((key, value) => value == true);
		console.log("Category types count : " + filteredArr.size());
	}

	_renderItem = ({ item }) => (
		<CategoryItem
			onPressItem={this._onPressItem}
			// selected={!!this.state.selected.get(item.id)}
			// title={item.title}
			// id={item.id}
			imageSourceNormal={item.imageSourceNormal}
			imageSourceClick={item.imageSourceClick}
			id={item.id}
			selected={!!this.state.selected.get(item.id)}
		/>
	);

	render() {
		return (
			<FlatList
				contentContainerStyle={{
					padding: 20,
					flex: 1,
					justifyContent: "space-between"
				}}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				data={this.props.data}
				extraData={this.state}
				keyExtractor={this._keyExtractor}
				renderItem={this._renderItem}
			/>
		);
	}
}

class CategoryItem extends PureComponent {
	constructor(props) {
		super(props);
		console.log("US Size item : " + this.props.id);
	}

	_onPress = () => {
		this.props.onPressItem(this.props.id);
	};

	render() {
		const textColor = this.props.selected ? "white" : "gray";
		const imageSource = this.props.selected
			? this.props.imageSourceClick
			: this.props.imageSourceNormal;
		return (
			<TouchableOpacity onPress={this._onPress}>
				<View style={{ flex: 1, alignItems: "center" }}>
					<Image
						style={{
							width: 40,
							height: 40
						}}
						source={imageSource}
					/>
					<Text style={{ textAlign: "center", color: textColor }}>
						{this.props.id}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
