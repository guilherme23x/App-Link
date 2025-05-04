import { ImageBackground, } from "react-native"
import { styles } from "./styles"
import CardBlur from "@/components/cardblur"

export default function Index() {

    return (
        <ImageBackground source={require("@/assets/wallpaper.jpeg")} resizeMode="cover" style={styles.container}>
            <CardBlur />
        </ImageBackground>
    )
}
