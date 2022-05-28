import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import RegistroPet from "./screens/registropet";

export default function App() {
	return (
		<PaperProvider>
			<RegistroPet/>
		</PaperProvider>
	);
}
