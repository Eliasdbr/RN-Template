import React from "react";

import {
	View
} from "react-native";

/**
 * Horizontal Frame, it distributes its children horizontally.
 */
const H: React.FC<React.PropsWithChildren> = ({
	children
}) => {
	return (
		<View style={{flex: 1, flexDirection: 'row'}}>
			{children}
		</View>
	);
}

export default H;