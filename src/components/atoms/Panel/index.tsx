import React from "react";
import { useColorScheme, View } from "react-native";

import {
	bgColor,
	colors,
	m, p, w as wdt, h as hgt,
} from '../../../styles'

import { PanelProps } from "./types";

/**
 * Basic container panel with some styles.
 */

const Panel: React.FC<PanelProps> = ({
	full = true,
	w,
	h,
	style,
	children,
}) => {
	const colorScheme = useColorScheme() || 'light';
	return (
		<View style={[
			style,
			m(4), p(4), bgColor(colors[colorScheme].text + '2'),	// 2 is for the alpha channel
			{borderRadius: 20, flex: Number(full)},
			w ? wdt(w) : {}, h ? hgt(h) : {},
		]}>
			{children}
		</View>
	);
}

export default Panel;