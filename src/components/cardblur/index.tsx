import { Image, View, TouchableOpacity, Text } from "react-native"
import { styles } from "./style"
import { router } from "expo-router"
import { BlurView } from "expo-blur"
export default function CardBlur() {
    return (
        <View style={styles.container}>
            <BlurView
                intensity={20}
                tint="dark"
            />
            <Text style={styles.title}>Bem Vindo(a) ao Guard-Links</Text>

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => router.navigate("/list/list")}
                style={styles.content}
            >
                <Image style={{ width: 64, height: 76 }} source={require("@/assets/logo.png")} />
                <Text style={styles.buttonOpen}>Ver minha lista</Text>
            </TouchableOpacity>
        </View>
    )
}
