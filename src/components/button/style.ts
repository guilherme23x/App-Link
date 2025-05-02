import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";


export const styles = StyleSheet.create({
    container: {
        height: 52,
        width: "60%",
        backgroundColor: colors.green[300],
        borderRadius: 8,
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal: "auto"
    },
    title:{
        color: colors.gray[900],
        fontSize: 16,
        fontWeight: "600"
    }
})
