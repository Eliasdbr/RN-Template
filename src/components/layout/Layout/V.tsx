import React from "react";

import {
	View
} from "react-native";

/**
 * Vertical Frame, it distributes its children horizontally.
 */
const V: React.FC<React.PropsWithChildren> = ({
	children
}) => {
	return (
		<View style={{flex: 1, flexDirection: 'column'}}>
			{children}
		</View>
	);
}

export default V;