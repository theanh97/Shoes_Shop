import { StyleSheet } from "react-native";

const STYLES = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black"
	},
	logo: {
		color:'white',
		backgroundColor:'transparent',
		fontSize:40,
		fontWeight:'bold'
	},
	toolbar: {
		height: 55,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#00BBF0",
		elevation: 4
	},
	tabBar: {
		height: 45,
		backgroundColor: "white",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	toolbarTitle: {
		flex: 1,
		textAlign: "center",
		fontWeight: "bold"
	},
	toolbarIcon: {
		width: 25,
		height: 25,
		resizeMode: "stretch"
	},
	bottomNavigation: {
		flexDirection: "row",
		height: 45,
		backgroundColor: "black"
	}
});

export default STYLES;
