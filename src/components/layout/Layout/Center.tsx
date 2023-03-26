import React from "react";

import HMiddle from "./HMiddle";
import VMiddle from "./VMiddle";

/**
 * Centers the alignment of its children.
 */
const Center: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return (
		<VMiddle>
			<HMiddle>
				{children}
			</HMiddle>
		</VMiddle>
	);
}

export default Center;