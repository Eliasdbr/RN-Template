/**
 * Types for the Panel component
 */

import { ViewStyle } from "react-native";

export type PanelProps = {
	full?: boolean,
	w?: string | number,
	h?: string | number,
	style?: ViewStyle,
} & React.PropsWithChildren;