import * as React from "react";
import { SafeAreaView } from "react-native";
import { Card, Title, Button, ToggleButton, TextInput, Text, List, Surface, RadioButton } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import ImagePicker from "react-native-image-picker";

const RegistroPet = () => {

	const imageUpload = () => {
		ImagePicker.launchImageLibrary({}, response => {
			console.log("Response = ");
		})
	};

	const [nome, setNome] = React.useState("");
	const [localizacao, setLocalizacao] = React.useState("");
	const [sexo, setSexo] = React.useState("");
	const [raca, setRaca] = React.useState("Raça*");
	const [anos, setAnos] = React.useState("");
	const [meses, setMeses] = React.useState("");
	const [peso, setPeso] = React.useState("Peso estimado*");
	const [porte, setPorte] = React.useState("Porte*");
	const [castrado, setCastrado] = React.useState("false")
	const [vacinado, setVacinado] = React.useState("false")
	const [tipo, setTipo] = React.useState("Tipo de animal*")
	const [descricao, setDescricao] = React.useState("")
	const [foto, setFoto] = React.useState("")
	const [email, setEmail] = React.useState("")
	const [telefone, setTelefone] = React.useState("")

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
					<Card.Title title="Registro do pet" titleStyle={{
						fontSize: 20,
						color: 'orange',
						textAlign: "center"
					}} />
					<Card.Content>
						<Button icon="camera" mode="text" onPress={imageUpload} theme={theme}
							style={{
								margin: 10,
								marginBottom: 10,
								width: "100%",
								// size big
								fontSize: 118,
							}}
						/>
						<TextInput label="Nome*"
							theme={theme}
							style={container.elements}
							value={nome}
							onChangeText={nome => setNome(nome)} />
						<TextInput label="Localização*"
							value={localizacao}
							style={container.elements}
							theme={theme}
							onChangeText={localizacao => setLocalizacao(localizacao)} />
						<Text style={container.text}>Sexo*</Text>
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
						</ToggleButton.Row>
						<List.Accordion
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
						</List.Accordion>
						<View style={{ flexDirection: "row" }}>
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
						</View>
						<List.Accordion
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
						</ToggleButton.Row>
						<List.Accordion
							title={tipo}
							style={container.elements}
							theme={theme}
							left={props => <List.Icon {...props} icon="paw" />}>
							<List.Item title="Cachorro"
								onPress={() => setTipo("Cachorro")} />
							<List.Item title="Gato"
								onPress={() => setTipo("Gato")} />
							<List.Item title="Coelho"
								onPress={() => setTipo("Coelho")} />
						</List.Accordion>
						<TextInput label="Telefone" theme={theme}
							style={container.elements}
							value={telefone}
							onChangeText={telefone => setTelefone(telefone)} />
						<TextInput label="Email" theme={theme}
							style={container.elements}
							value={email}
							onChangeText={email => setEmail(email)} />
						<TextInput label="Descrição*" theme={theme}
							style={container.elements}
							multiline={true}
							numberOfLines={5}
							value={descricao}
							onChangeText={descricao => setDescricao(descricao)} />
					</Card.Content>
					<Card.Actions>
						<View style={{
							display: "flex",
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "row",
						}}>
							<Button
								mode="contained" color="orange" onPress={() => { }}>
								Cadastrar
							</Button>
						</View>
					</Card.Actions>
				</Card>
			</View>
		</SafeAreaView>
	);
}


export default RegistroPet;
