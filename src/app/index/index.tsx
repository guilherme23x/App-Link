import { Image, View, TouchableOpacity, FlatList, Modal, Text, Alert, Linking } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/options"
import { router, useFocusEffect } from "expo-router"
import { useState, useCallback } from "react"
import { categories } from "@/utils/categories"
import { linkStorage, LinkStorage } from "@/storage/link-storage"

export default function Index() {
    const [showModal, setShowModal] = useState(false)
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [category, setCategory] = useState(categories[0].name)
    const [link, setLink] = useState<LinkStorage>({} as LinkStorage)

    async function getLinks() {
        try {
            const response = await linkStorage.get()
            const filtred = response.filter((link) => link.category === category)

            setLinks(filtred)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível listar os links")
        }
    }

    function handleDatils(selected: LinkStorage) {
        setShowModal(true)
        setLink(selected)
    }

    async function handleOpen() {
        try {
            await Linking.openURL(link.url)
            setShowModal(false)
        } catch (error) {
            Alert.alert("Link", "Não foi possível abrir o link")
        }
    }

    async function handleRemove() {
        try {
            Alert.alert("Excluir", "Deseja realmente excluir?", [{ style: "cancel", text: "Não" }, {
                text: "Sim", onPress: async () => {
                    await linkStorage.remove(link.id)
                    getLinks()
                    setShowModal(false)
                }
            }])
        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir")
        }
    }

    useFocusEffect(useCallback(() => {
        getLinks()
    }, [category]))

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("@/assets/logo.png")} />
                <TouchableOpacity activeOpacity={0.6} onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories onChange={setCategory} selected={category} />

            <FlatList
                data={links}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Link
                        name={item.name}
                        url={item.url}
                        onDetails={() => handleDatils(item)}
                    />)}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal visible={showModal} animationType="slide" transparent>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>
                                {link.category}
                            </Text>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>
                            {link.name}
                        </Text>
                        <Text style={styles.modalURL}>
                            {link.url}
                        </Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove}></Option>
                            <Option name="Abrir" icon="language" onPress={handleOpen}></Option>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>

    )
}
