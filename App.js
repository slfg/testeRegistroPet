import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroPessoa from './screens/registropessoa';
import RegistroPet from "./screens/registropet";

function telainicial({ navigation }) {
	return (
		<View>
			<Button mode="contained" onPress={() => navigation.push('RegistroPessoa')}>
				Registro da pessoa
			</Button>
			<Button mode="contained" onPress={() => navigation.push('RegistroPet')}>
				Registro do pet
			</Button>
		</View>
	)
}

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="telainicial" component={telainicial} />
					<Stack.Screen name='RegistroPet' component={RegistroPet} />
					<Stack.Screen name='RegistroPessoa' component={RegistroPessoa} />
					{	/* <RegistroPet/> */}
					{ /* <RegistroPessoa /> */}
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}
