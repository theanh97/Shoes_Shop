import FlashScreen from "../containers/flash";
import HomeScreen from "../containers/home";
import FilterScreen from "../containers/filter";
import ShoesScreen from "../containers/shoes";
import IntroduceScreen from "../containers/introduce";

export const routes = {
	FlashScreen: {
		screen: FlashScreen
	},
	IntroduceScreen: {
		screen: IntroduceScreen
	},
	HomeScreen: {
		screen: HomeScreen
	},
	FilterScreen: {
		screen: FilterScreen
	},
	ShoesScreen: {
		screen: ShoesScreen
	}
};

export const configInitial = {
	// initialRouteName: "FlashScreen",
	// initialRouteName: "HomeScreen",
	// initialRouteName: "FilterScreen",
	initialRouteName: "IntroduceScreen",
	headerMode: "none"
};
