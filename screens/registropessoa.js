import * as React from "react";
import { SafeAreaView } from "react-native";
import { Card, Title, Button, ToggleButton, TextInput, Text, List } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RegistroPessoa = ({ navigation }) => {

	const imageUpload = () => {
		ImagePicker.launchImageLibrary({}, response => {
			console.log("Response = ", response);
		})
	};

	const [tipopessoa, seTipoppessoa] = React.useState("");
	const [nome, setNome] = React.useState("");
	const [cpf, setCpf] = React.useState("");
	const [cnpj, setCnpj] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [senha, setSenha] = React.useState("");
	const [confirmarsenha, setConfirmarsenha] = React.useState("");
	const [telefone, setTelefone] = React.useState("")
	const [endereco, setEndereco] = React.useState("");

	const [expanded, setExpanded] = React.useState(true);
	const handlePress = () => setExpanded(!expanded);

	const theme = {
		colors: {
			primary: 'orange',
			accent: 'orange',
		}
	};

	const container = StyleSheet.create({
		content: {
			display: "flex",
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "row",
			backgroundColor: 'black',
		},
		elements: {
			margin: 10,

		},
		elementscenter: {
			margin: 5,
			marginBottom: 10,
			alignItems: "center",
			justifyContent: "center",
		},
		text: {
			fontSize: 18,
			marginTop: 10,
			marginBottom: 10,
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center"
		}
	});

	return (
		<SafeAreaView style={container.content}>
			<View style={container.view}>
				<Card
					theme={theme}>
					<Card.Title title="Registro do Usuário" titleStyle={{
						fontSize: 20,
						color: 'orange',
						textAlign: "center"
					}} />
					<Card.Content>
						<List.Section>
							<List.Accordion
								title={tipopessoa === "" ? "Tipo de pessoa" : tipopessoa}
								left={props => <List.Icon {...props} icon="account-multiple" />}
								expanded={expanded}
								onPress={handlePress}
								theme={theme}
							>
								<List.Item
									title="Pessoa Física"
									left={props => <List.Icon {...props} icon="account" />}
									onPress={() => seTipoppessoa("Pessoa física")}
								/>
								<List.Item
									title="Pessoa Jurídica"
									left={props => <List.Icon {...props} icon="account-multiple" />}
									onPress={() => seTipoppessoa("Pessoa jurídica")}
								/>
							</List.Accordion>
						</List.Section>
						{tipopessoa === "Pessoa física" && (
							<>
								<TextInput
									label="CPF"
									value={cpf}
									onChangeText={setCpf}
									theme={theme}
									style={container.elements}
								/>
							</>)
						}
						{tipopessoa === "Pessoa jurídica" && (
							<>
								<TextInput
									label="CNPJ"
									value={cnpj}
									onChangeText={setCnpj}
									theme={theme}
									style={container.elements}
								/>
							</>)}
						<TextInput label="Nome*"
							theme={theme}
							style={container.elements}
							value={nome}
							onChangeText={nome => setNome(nome)} />
						<TextInput label="Endereço*"
							value={endereco}
							style={container.elements}
							theme={theme}
							onChangeText={endereco => setEndereco(endereco)} />
						{/* /* <Text style={container.text}>Sexo*</Text>
					<ToggleButton.Row
						style={container.elementscenter}
						onValueChange={value => setSexo(value)}
						value={sexo}>
						<ToggleButton
							icon="gender-male"
							value="Macho"
						/>
						<ToggleButton
						style={{
							margin: 10
						}}
							icon="gender-female"
							value="Fêmea"
						/>
					</ToggleButton.Row> */}
						{/* <List.Accordion
						title={raca}
						theme={theme}
						style={container.elements}
						left={props => <List.Icon {...props} icon="dog" />}
					>
						<List.Item title="Salsicha"
							onPress={() => setRaca("Salsicha")
							} />
						<List.Item title="Vira-lata"
							onPress={() => setRaca("Vira-lata")
							} />
						<List.Item title="Poodle"
							onPress={() => setRaca("Poodle")} />
					</List.Accordion> */}
						{/* <View style={{ flexDirection: "row" }}>
						<View style={{ flex: 1 }}>
							<TextInput label="Anos"
						style={container.elements}
						value={anos}
								theme={theme}
								onChangeText={anos => setAnos(anos)} />
						</View>
						<View style={{ flex: 1 }}>
							<TextInput label="Meses"
						style={container.elements}
						value={meses}
								theme={theme}
								onChangeText={meses => setMeses(meses)} />
						</View>
					</View> */}
						{/* <List.Accordion
						title={peso}
						style={container.elements}
						theme={theme}
						left={props => <List.Icon {...props} icon="weight" />}>
						<List.Item title="2-5 kg"
							onPress={() => setPeso("2-5 kg")} />
						<List.Item title="5-10 kg"
							onPress={() => setPeso("5-10 kg")} />
						<List.Item title="10-15 kg"
							onPress={() => setPeso("10-15 kg")} />
					</List.Accordion>
					<List.Accordion
						title={porte}
						style={container.elements}
						theme={theme}
						left={props => <List.Icon {...props} icon="dog-side" />}>
						<List.Item title="Pequeno"
							onPress={() => setPorte("Pequeno")} />
						<List.Item title="Médio"
							onPress={() => setPorte("Médio")} />
						<List.Item title="Grande"
							onPress={() => setPorte("Grande")} />
					</List.Accordion>
					<Text style={container.text}>Vacinado?</Text>
					<ToggleButton.Row
						onValueChange={value => setVacinado(value)}
						style={container.elementscenter}
						value={vacinado}>
						<ToggleButton
						style={{
							margin: 10
						}}
							icon="check"
							value="true"
						/>
						<ToggleButton
							icon="close"
							value="false"
						/>
					</ToggleButton.Row>
					<Text style={container.text}>Castrado?</Text>
					<ToggleButton.Row
						onValueChange={value => setCastrado(value)}
						style={container.elementscenter}
						value={castrado}>
						<ToggleButton
						style={{
							margin: 10
						}}
							icon="check"
							value="true"
						/>
						<ToggleButton
							icon="close"
							value="false"
						/>
					</ToggleButton.Row> */}
						{/* <List.Accordion
						title={tipo}
						style={container.elements}
						theme={theme}
						left={props => <List.Icon {...props} icon="carrot" />}>
						<List.Item title="Cachorro"
							onPress={() => setTipo("Cachorro")} />
						<List.Item title="Gato"
							onPress={() => setTipo("Gato")} />
						<List.Item title="Coelho"
							onPress={() => setTipo("Coelho")} />
					</List.Accordion> */}
						<TextInput label="Telefone*" theme={theme}
							style={container.elements}
							value={telefone}
							onChangeText={telefone => setTelefone(telefone)} />
						<TextInput label="Email*" theme={theme}
							style={container.elements}
							value={email}
							onChangeText={email => setEmail(email)} />
						{/* <TextInput label="Descrição*" theme={theme} 
						style={container.elements}
						multiline={true}
					numberOfLines={5}
						value={descricao}
						onChangeText={descricao => setDescricao(descricao)} /> */}
						<TextInput label="Senha*" theme={theme}
							style={container.elements}
							secureTextEntry={true}
							value={senha}
							onChangeText={senha => setSenha(senha)} />
						<TextInput label="Confirmar senha*" theme={theme}
							style={container.elements}
							secureTextEntry={true}
							value={confirmarsenha}
							onChangeText={confirmarsenha => setConfirmarsenha(confirmarsenha)} />
					</Card.Content>
					<Card.Actions style={container.elementscenter}>
						<Button mode="contained" color="orange" onPress={() => { }}>
							Cadastrar Pessoa
						</Button>
					</Card.Actions>
				</Card>
			</View>
		</SafeAreaView>
	);
}


export default RegistroPessoa;
