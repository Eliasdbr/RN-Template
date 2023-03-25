import React from "react";
import { 
	Text, 
	useColorScheme, 
	View
} from "react-native";

import {bgColor, colors, fonts, layout, m, mx, my} from '../../styles/styles';

const Home: React.FC = () => {
	const colorScheme = useColorScheme() || 'light';

	return (
		<View style={[
			layout.flexFill, 
			bgColor(colors[colorScheme].background),
			mx(8), my(16),
		]}>
			<Text style={[
				fonts[colorScheme].p,
			]}>
				Home Screen
			</Text>
		</View>
	);
}

export default Home;