import React, { PureComponent } from "react";
import { FlatList, View, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-elements";

export default class USSizeFlatList extends PureComponent {
	state = { selected: (new Map(): Map<string, boolean>) };

	// _keyExtractor = (item, index) => item.id;
	_keyExtractor = (item, index) => item;

	_onPressItem = (id: string) => {
		// updater functions are preferred for transactional updates
		this.setState(state => {
			// copy the map rather than modifying state.
			const selected = new Map(state.selected);
			selected.set(id, !selected.get(id)); // toggle
			return { selected };
		});

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

	_renderItem = ({ item }) => (
		<USSizeItem
			onPressItem={this._onPressItem}
			// selected={!!this.state.selected.get(item.id)}
			// title={item.title}
			// id={item.id}
			id={item}
			selected={!!this.state.selected.get(item)}
			title={item}
		/>
	);

	render() {
		return (
			<FlatList
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

class USSizeItem extends PureComponent {
	constructor(props) {
		super(props);
		console.log("US Size item : " + this.props.id);
	}

	_onPress = () => {
		this.props.onPressItem(this.props.id);
	};

	render() {
		const backColor = this.props.selected ? "white" : "gray";
		return (
			<Button
				onPress={this._onPress}
				buttonStyle={{
					width: 55,
					height: 40,
					backgroundColor: backColor,
					borderRadius: 4,
					borderWidth: 3
				}}
				title={this.props.title}
				textStyle={{ fontSize: 10, letterSpacing: 0.8, color: "black" }}
			/>
		);
	}
}
