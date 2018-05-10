import React, { Component } from "react";
import { View } from "react-native";
// import Slideshow from "react-native-slideshow";
import ImageSlider from "react-native-image-slider";
export default class CollectionSlideImage extends Component {
	render() {
		return (
			<View style = {{flex:1}}>
				<ImageSlider
					autoPlayWithInterval={2000}
					images={[
						"https://png.pngtree.com/thumb_back/fh260/back_pic/00/08/93/62562c590cc20b1.jpg",
						"http://www.africafashionguide.com/wp-content/uploads/2012/06/4375-Enzi-Twitter-Background-V1-1024x640.jpg",
						"https://image.shutterstock.com/image-photo/colorful-toddler-shoes-on-wooden-260nw-281072813.jpg"
					]}
				/>
			</View>
		);
	}
}
