import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Switch, TouchableOpacity } from "react-native";



export default function InfoInput() {

    const [nameUser, setNameUser] = useState<string>("");
    const [nota01, setNota01] = useState<string>("");
    const [nota02, setNota02] = useState<string>("");
    const [media, setMedia] = useState<number | null>(null);

    const calculoLimpar = () => {
        setNameUser("");
        setNota01("");
        setNota02("");
        setMedia(null);
    }

    const calculoMedia = (nota01: string, nota02: string): void => {
        const n1 = parseFloat(nota01);
        const n2 = parseFloat(nota02);

        if (isNaN(n1) || isNaN(n2)) {
            alert("Notas devem ser numéricas!");
        } else {
            const mediaCalculada = (n1 + n2) / 2;;
            setMedia(mediaCalculada);
        }


    }

    return (
        <View style={styles.container_geral}>
            <Text style={styles.titleAplication}>Calculo de Media</Text>
            <TextInput
                style={styles.inputName}
                value={nameUser}
                onChangeText={setNameUser}
                placeholder="Digite Seu nome" />
            <View style={styles.container_interno}>
                <TextInput
                    returnKeyType="send"
                    keyboardType="numeric"
                    style={styles.inputNota}
                    placeholder="Primeira Nota"
                    value={nota01}
                    onChangeText={setNota01} />
                <TextInput
                    returnKeyType="send"
                    keyboardType="numeric"
                    style={styles.inputNota}
                    placeholder="Segunda Nota"
                    value={nota02}
                    onChangeText={setNota02} />
            </View>
            <View>
                <View style={styles.container_button}>
                    <TouchableOpacity onPress={() => calculoMedia(nota01, nota02)}>
                        <Text style={styles.buttonCalc}>Calcular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={calculoLimpar}>
                        <Text style={styles.buttonLimpar}>Limpar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container_resultado}>
                        <Text style={styles.resultado}>Aluno: {nameUser} {'\n'} Média: {media}</Text>
                </View>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    container_button: {
        flexDirection: 'row',
        gap: 10,
    },

    container_resultado: {
        padding: 15,
        marginTop: 20,
        backgroundColor: "black",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    resultado: {
        color: "white",
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },

    buttonLimpar: {
        backgroundColor: '#f55d5d',
        padding: 20,
        width: 150,
        textAlign: 'center',
        borderRadius: 10,
        textTransform: 'uppercase',
        color: "white",
        fontWeight: 800,
        fontSize: 20,
    },

    buttonCalc: {
        backgroundColor: '#4CAF50',
        padding: 20,
        width: 150,
        textAlign: 'center',
        borderRadius: 10,
        textTransform: 'uppercase',
        color: "white",
        fontWeight: 800,
        fontSize: 20,
    },

    inputNota: {
        width: "45%",
        height: 65,
        borderWidth: 1,
        borderColor: "green",
        padding: 20,
        borderRadius: 15,
    },

    container_interno: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },

    titleAplication: {
        fontFamily: "Helvetica Neue",
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: 800,
    },

    container_geral: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },

    inputName: {
        width: "80%",
        borderWidth: 1,
        borderColor: "green",
        padding: 20,
        borderRadius: 15,
    },
})

