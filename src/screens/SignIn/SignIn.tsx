import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { 
	Button,
	Text, 
	useColorScheme, 
	View
} from "react-native";
import Divider from "../../components/atoms/Divider";
import Input from "../../components/atoms/Input";
import Panel from "../../components/atoms/Panel";
import Layout from "../../components/layout/Layout";
import { MainNavigatorParamList } from "../../navigation/MainNaviagator";

import {bgColor, colors, fonts, layout, m, mx, my} from '../../styles';

export type SignInNavigationProp = BottomTabNavigationProp<
  MainNavigatorParamList,
  'SignIn'
>;

const SignIn: React.FC = () => {
	const colorScheme = useColorScheme() || 'light';
	const { navigate } = useNavigation<SignInNavigationProp>();

	return (
		<View style={[
			layout.flexFill, 
			bgColor(colors[colorScheme].background),
			mx(8), my(16),
		]}>
			<Text style={[
				fonts[colorScheme].h1,
			]}>
				Sign In Screen
			</Text>
			<Divider/>
			<Text
				style={[fonts[colorScheme].p]}
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore velit qui hic eaque nulla distinctio nihil ab, labore magni eveniet suscipit sed possimus pariatur modi fugiat autem saepe provident neque.
			</Text>
			<Button 
				title="Ingresar"
				onPress={() => {
					navigate('Home', {});
				}}
			/>
			<Layout.Full grow={1}>
				<Input />
			</Layout.Full>
		</View>
	);
}

export default SignIn;