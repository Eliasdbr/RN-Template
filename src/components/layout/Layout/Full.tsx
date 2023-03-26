import React from "react";

import {
	View
} from "react-native";

import { FullLayoutProps } from "./types";

/**
 * Full Frame, it stretches to fill its parent space.
 */
const Full: React.FC<FullLayoutProps> = ({
	grow = 1,
	children,
}) => {
	return (
		<View style={{flex: grow}}>
			{children}
		</View>
	);
}

export default Full;