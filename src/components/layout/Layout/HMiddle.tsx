import React from "react";

import {
	View
} from "react-native";

/**
 * Centers the position of its children.
 */
const HMiddle: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return (
		<View style={{flex: 1, justifyContent: 'center'}}>
			{children}
		</View>
	);
}

export default HMiddle;