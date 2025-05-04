import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1, paddingTop: 62
    },
    containerContent: {
        backgroundColor: "rgba(0,0,0,0.8)",
        width: "90%",
        height: "90%",
        marginHorizontal: "auto",
        borderRadius: 18,
        padding: 24,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.4)"

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    title: {
        color: colors.gray[200],
        fontSize: 24,
        fontWeight: "600",

    },
    label: {
        color: colors.gray[400],
        fontSize: 14,
        paddingHorizontal: 24,
    },
    form: {
        gap: 16

    }
})
