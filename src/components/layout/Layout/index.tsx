import React from "react";

import {
	View,
} from "react-native";

import { LayoutProps, LayoutSubComponents } from "./types";

import H from "./H";
import V from "./V";
import Full from "./Full";
import HMiddle from "./HMiddle";
import VMiddle from "./VMiddle";
import Center from "./Center";

/**
 * Main Layout wrapper.
 * It can be used alone with its properties, or as a class with its children
 */
const Layout: React.FC<LayoutProps> & LayoutSubComponents = ({
	grow = 1,
	direction = 'column',
	justify,
	align,
	m = 0,
	p = 0,
	style = {},
	children,
}) => {
	return (
		<View style={{
			...style,
			flex: grow,
			flexDirection: direction,
			justifyContent: justify,
			alignItems: align,
			margin: m, padding: p,
		}}>
			{children}
		</View>
	);
}

Layout.H = H;
Layout.V = V;
Layout.HMiddle = HMiddle;
Layout.VMiddle = VMiddle;
Layout.Full = Full;
Layout.Center = Center;

export default Layout;
