import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./style";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";


type Props = TouchableOpacityProps & {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
    variant?: "primary" | "secondary"
}


export function Option({ name, icon, variant = "primary", ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container}{...rest} activeOpacity={0.6}>
            <MaterialIcons name={icon} size={20} color={variant === "primary" ? colors.blue[900] : colors.gray[400]} />
            <Text style={variant === "primary" ? styles.primaryTitle : styles.secondaryTitle}>{name}</Text>
        </TouchableOpacity>
    )
}
