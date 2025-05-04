import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "60%",
        width: "90%",
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0, 0.7)",
        borderColor: "rgba(255,255,255, 0.2)",
        borderWidth: 2,
        position: "relative",
        gap: 12
    },

    content: {
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        zIndex: 1,
    },
    buttonOpen: {
        color: colors.gray[800],
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        padding: 12,
        borderRadius: 8,
        backgroundColor: colors.blue[900]
    },
    title: {
        fontSize: 20,
        margin: 20,
        fontWeight: "600",
        textAlign: "center",
        color: colors.gray[300]
    }
})
