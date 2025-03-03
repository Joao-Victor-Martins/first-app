
import { StyleSheet ,View, Text } from "react-native"

export default function Footer() {
    return (
        <View style={styles.container_footer}>
            <Text style={styles.text_footer}>Desenvolvido por CyberTech</Text>
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