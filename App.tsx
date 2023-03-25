/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StatusBar,
	View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigation/MainNaviagator';

function App(): JSX.Element {
	useEffect(()=>{
		SplashScreen.hide();
	},[]);

  return (
		<SafeAreaProvider>
			<NavigationContainer>
				<View style={{flex: 1, backgroundColor: '#000'}}>
					<StatusBar
						barStyle={'light-content'}
						backgroundColor={'#000'}
					/>
					<MainNavigator/>
				</View>
			</NavigationContainer>
		</SafeAreaProvider>
  );
}

export default App;
