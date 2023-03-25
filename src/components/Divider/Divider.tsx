import React from "react";
import { useColorScheme, View } from 'react-native';
import { colors } from "../../styles/styles";

export type DividerProps = {
	orientation?: 'vertical' | 'horizontal',
	width?: number,
	margin?: number,
	/**
	 * Between 0.0 and 1.0
	 */
	opacity?: number,
};

const Divider: React.FC<DividerProps>  = ({
	orientation = 'vertical',
	width = 1,
	margin = 8,
	opacity = 0.3,
}) => {
	// Hooks
	const colorScheme = useColorScheme() || 'light';
	const layout = orientation == "vertical"
		? {
			height: width,
			marginVertical: margin,
		}
		: {
			width: width,
			marginHorizontal: margin,
		};

	// Renders component
	return <View
		style={{
			backgroundColor: colors[colorScheme].text,
			opacity: opacity,
			...layout,
		}}
	/>;
}

export default Divider;