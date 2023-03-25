/**
 * Global styles for the whole app
 */

import { ColorValue, TextStyle, ViewStyle } from "react-native"

export type StylesFontType = Record<
	('light' | 'dark'), 
	Record<
		string,
		TextStyle
	>
>

export type StylesLayoutType = Record<
	string,
	ViewStyle
>

export const gradients = {
	primary: ['#7AF', '#68F'],
	secondary: ['#67B', '#97B'],
}

export const colors = {
	light: {
		primary: '#7AF',
		secondary: '#97F',
		background: '#EEF',
		text: '#224',
		disabled: '#448',
		success: '#7A8',
		warning: '#A97',
		error: '#A77',
	},
	dark: {
		primary: '#46F',
		secondary: '#64F',
		background: '#224',
		text: '#EEF',
		disabled: '#88D',
		success: '#8C9',
		warning: '#CA8',
		error: '#C88',
	},
}

export const layout: StylesLayoutType = {
	flexFill: {
		flex: 1
	},
	flexColumn: {
		flexDirection: 'column',
	},
	flexRow: {
		flexDirection: 'row',
	}
}

export const fonts: StylesFontType = {
	light: {
		p: {
			fontSize: 14,
			fontWeight: 'normal',
			color: colors.light.text,
		},
		h1: {
			fontSize: 26,
			fontWeight: 'bold',
			color: colors.light.text,
			margin: 8,
		},
	},
	dark: {
		p: {
			fontSize: 14,
			fontWeight: 'normal',
			color: colors.dark.text,
		},
		h1: {
			fontSize: 26,
			fontWeight: 'bold',
			color: colors.dark.text,
			margin: 8,
		},
	},
}

/*********************************************************
 * Functions to abbreviate generic layout and color rules
 *********************************************************/

/**
 * Set foreground color
 */
export const color = (colorValue: ColorValue): ViewStyle | TextStyle => {
	return { color: colorValue };
}

/**
 * Set foreground color
 */
export const bgColor = (colorValue: ColorValue): ViewStyle => {
	return { backgroundColor: colorValue };
}

/**
 * Set margin
 */
export const m = (value: number): ViewStyle => ({margin: value});
/**
 * Set padding
 */
export const p = (value: number): ViewStyle => ({padding: value});
/**
 * Set margin X
 */
export const mx = (value: number): ViewStyle => ({marginHorizontal: value});
/**
 * Set padding X
 */
export const px = (value: number): ViewStyle => ({paddingHorizontal: value});
/**
 * Set margin Y
 */
export const my = (value: number): ViewStyle => ({marginVertical: value});
/**
 * Set padding Y
 */
export const py = (value: number): ViewStyle => ({paddingVertical: value});
/**
 * Custom flex value
 */
export const flex = (value: number): ViewStyle => ({flex: value});