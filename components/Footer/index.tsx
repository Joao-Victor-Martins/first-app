
import { StyleSheet ,View, Text, TouchableOpacity, Linking } from "react-native"

export default function Footer() {

    const openInstagram = () => {
        Linking.openURL('https://www.instagram.com/sargentojojo')
        .catch(err => console.error('Failed to open instagram', err));
    }

    return (
        <View style={styles.container_footer}>
            <TouchableOpacity onPress={openInstagram}>
            <Text style={styles.text_footer}>Desenvolvido por CyberTech</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({ 

    text_footer: {
        fontSize: 16,
        textAlign: "center",
        padding: 10,
        color: "#11d9f7",
    },

    container_footer: {
        backgroundColor: "black",
    }


})