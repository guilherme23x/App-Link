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
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32
    },
    logo: {
        height: 32,
        width: 38
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100,
    },
    modal: {
        flex: 1,
        justifyContent: "flex-end",

    },
    modalContent: {
        backgroundColor: colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 32,
        padding: 24,
        borderWidth: 2,
        width: "95%",
        marginHorizontal: "auto",
        borderRadius: 18,
        borderColor: "rgba(255,255,255,0.2)",
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 42
    },
    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        color: colors.gray[400]
    },
    modalLinkName: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200]
    },
    modalURL: {
        fontSize: 14,
        color: colors.gray[400]
    },
    modalFooter: {
        flexDirection: "row",
        marginTop: 32,
        width: "100%",
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        paddingVertical: 14
    }
})
