import React, { Component } from "react";
import {
	AppRegistry,
	Image,
	View,
	StyleSheet,
	ListView,
	Text,
	Dimensions,
	TouchableOpacity
} from "react-native";
import ImageLoad from 'react-native-image-placeholder';

const ic_placeHolder = require("../image/ic_placeholder.png");

export default class OnfeetOnGoatStaggerGridView extends Component {
	constructor(props) {
		super(props);
		ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		data = [
			"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/08/15/grid-img/1510288174822833935.jpg",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8PzVWY8zjoYizBA-pxwQlcsUxI7-dn6yspeAsq96Px-y5FDe",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8XJUF9xVViXxAvSQ88WCVZ4omcCEt1sU532Fs9c0pzobXkba",
			"https://images.champssports.com/is/image/EBFL2/43796003_a1_sc7_rs?hei=1500&wid=1500",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tX4Y-mT4oE2AI0XrD5m-n4pi9VjmgXaHTq8ST8NRFVHqA-F0pA",
			"https://cdn.shopify.com/s/files/1/0651/1419/products/il_fullxfull.646328316_3m2h.jpeg?v=1441093674"
		];

		this.state = {
			dataSource: ds.cloneWithRows(data)
		};
	}

	_onPressItem(image) {
		alert(image);
	}

	render() {
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this._renderRow}
				contentContainerStyle={styles.gridView}
			/>
		);
	}

	_renderRow(image) {
		return (
			<TouchableOpacity onPress={()=>{
				alert(image);
			}}>
				<Image
					source={{ uri: image }}
					style={{
						width: Dimensions.get("window").width / 2 - 4,
						height: 150,
						margin: 1,
						borderWidth: 0.05,
						borderColor: "gray"
					}}
					placeholderSource={ic_placeHolder}
					resizeMode={"stretch"}
				/>
			</TouchableOpacity>
		);
	}
}

var styles = StyleSheet.create({
	gridView: {
		justifyContent: "center",
		flexDirection: "row",
		flexWrap: "wrap"
	}
});

