import React from "react";

import {
	View
} from "react-native";

/**
 * Centers the alignment of its children.
 */
const VMiddle: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return (
		<View style={{flex: 1, alignItems: 'center'}}>
			{children}
		</View>
	);
}

export default VMiddle;