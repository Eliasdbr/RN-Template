import React, { PropsWithChildren, useEffect } from 'react';
import {
	Platform,
  Text,
  useColorScheme,
	View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { colors, layout } from '../styles/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SignIn from '../screens/SignIn/SignIn';
import Home from '../screens/Home/Home';
import { ParamListBase } from '@react-navigation/native';
import Settings from '../screens/Settings/Settings';
// Bottom Tab Navigator
export type MainNavigatorParamList = {
	SignIn: {},
	Home: {},
	Settings: {},
};

// export type MainNavigatorRouteParams;

const MainTab = createBottomTabNavigator<MainNavigatorParamList>();

const MainView: React.FC<PropsWithChildren> = ({children}: PropsWithChildren)  => {
	const isDarkMode = useColorScheme() === 'dark';
	const colorScheme = useColorScheme() || 'light';
	const insets = useSafeAreaInsets();

	return (
		<View style={[layout.flexFill, {
				borderRadius: 24,
				backgroundColor: colors[colorScheme].background,
				marginTop: insets.top,
				marginBottom: Platform.OS === 'android' ? insets.bottom : 8,
				// marginBottom: insets.bottom,
				marginLeft: insets.left,
				marginRight: insets.right,
				overflow: 'hidden',
			}]}>
				{children}
		</View>
	);
}

function MainNavigator({children}: PropsWithChildren): JSX.Element {
	const colorScheme = useColorScheme() || 'light';

	return (
		<MainTab.Navigator
			// safeAreaInsets={insets}
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: '#0000',
					shadowOpacity: 0,
					shadowColor: '#0000',
					// height: 56,
					borderColor: '#0000',
					borderWidth: 1,
					borderStyle: 'solid',
					borderTopColor: '#0000',
					elevation: 0,
					margin: 0,
				},
				headerShown: false,
				tabBarHideOnKeyboard: true,
			}}
			sceneContainerStyle={{
				backgroundColor: '#0000',
				borderColor: '#0000',
				borderWidth: 0,
			}}
		>
			<MainTab.Screen
				name='SignIn'
				children={
					() => <MainView>
						<SignIn/>
					</MainView>
				}
				options={{
					tabBarStyle: {
						display: 'none',
					},
					tabBarIcon: ({focused})=>{
						if (focused) return <IonIcon name='person' color='white' size={24} />
						return <IonIcon name='person-outline' color='white' size={24} />
					},
					tabBarItemStyle: {
						display: 'none',
					}
				}}
				
			/>
			<MainTab.Screen
				name='Home'
				children={
					() => <MainView>
						<Home/>
					</MainView>
				}
				options={{
					tabBarIcon: ({focused})=>{
						if (focused) return <IonIcon name='home' color='white' size={24} />
						return <IonIcon name='home-outline' color='white' size={24} />
					},
				}}
			/>
			<MainTab.Screen
				name='Settings'
				children={
					() => <MainView>
						<Settings/>
					</MainView>
				}
				options={{
					tabBarIcon: ({focused})=>{
						if (focused) return <IonIcon name='settings' color='white' size={24} />
						return <IonIcon name='settings-outline' color='white' size={24} />
					},
				}}
			/>
		</MainTab.Navigator>
	);
}

export default MainNavigator;