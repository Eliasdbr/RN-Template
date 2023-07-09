/**
 * Types for Layout components
 */

import {
	FlexAlignType,
	ViewStyle,
} from "react-native/types";

/**
 * Layout sub-components
 */
export type LayoutSubComponents = {
	H?: React.FC<React.PropsWithChildren>,
	V?: React.FC<React.PropsWithChildren>,
	Full?: React.FC<FullLayoutProps>,
	HMiddle?: React.FC<React.PropsWithChildren>,
	VMiddle?: React.FC<React.PropsWithChildren>,
	Center?: React.FC<React.PropsWithChildren>,
}

/**
 * Layout component properties
 */
export type LayoutProps = {
	grow?: number,
	direction?: 'column' | 'row',
	justify?:  "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly",
	align?: FlexAlignType,
	m?: number,
	mx?: number,
	my?: number,
	p?: number,
	px?: number,
	py?: number,
	style?: ViewStyle,
} & React.PropsWithChildren & LayoutSubComponents;

/**
 * Full layout component types
 */
export type FullLayoutProps = {
	grow?: number,
} & React.PropsWithChildren;