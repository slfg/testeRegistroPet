import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { BottomNavigation, Button } from "react-native-paper";
/* import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'; */
import RegistroPessoa from './screens/registropessoa';
import RegistroPet from "./screens/registropet";
import Login from "./screens/login";

function telainicial() {
	return (
		<View>
			<Button mode="contained">
				Registro da pessoa
			</Button>
			<Button mode="contained">
				Registro do pet
			</Button>
			<Button mode="contained">
				Login
			</Button>
		</View>
	)
}

export default function App() {
	const [index, setIndex] = React.useState(0);

	const [routes] = React.useState([
		{ key: 'registropet', title: 'Registro do pet', icon: 'format-float-left' },
		{ key: 'registropessoa', title: 'Registro do usuário', icon: 'format-align-left' },
		{ key: 'login', title: 'Login', icon: 'format-float-right' }
	]);

	const renderScene = BottomNavigation.SceneMap({
		registropet: RegistroPet,
		registropessoa: RegistroPessoa,
		login: Login
	});

	return (
		<PaperProvider>
			<BottomNavigation
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				renderScene={renderScene}
			/>
			{	/* <RegistroPet/> */}
			{ /* <RegistroPessoa /> */}
		</PaperProvider>
	);
}
