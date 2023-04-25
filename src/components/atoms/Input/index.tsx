import React, { PropsWithChildren, useState } from "react";
import {
	KeyboardTypeOptions,
	TextInput,
	useColorScheme,
} from "react-native";
import {
	bgColor,
	colors,
	fonts,
	m,
	p,
	radius
} from "../../../styles";

/* 
	TODO
	Add charactersToExclude prop
	Add onChange prop
	Add onFocus prop
	Add onBlur prop
*/

export type InputProps = {
	type?: KeyboardTypeOptions | 'password',
	maxLength?: number,
	placeholder?: string,
};

/**
 * Simplified Input
 */
const Input: React.FC<InputProps> = ({
	type = 'default',
	maxLength = 255,
	placeholder,
}) => {
	const colorScheme = useColorScheme() || 'light';
	const [text, setText] = useState<string>('');

	const curateInput = (value: string) => {

		setText(value);
	}

	return <TextInput 
		value={text}
		onChangeText={curateInput}
		keyboardType={type === 'password' ? 'default' : type}
		secureTextEntry={type === 'password'}
		placeholder={placeholder}
		maxLength={maxLength}
		style={[
			bgColor(colors[colorScheme].text + '2'),
			fonts[colorScheme].normal,
			p(8), radius(10), m(8)
		]}
	/>;
}

export default Input;