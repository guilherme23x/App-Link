import { Image, View, TouchableOpacity, FlatList, Modal, Text } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/options"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("@/assets/logo.png")} />
                <TouchableOpacity activeOpacity={0.6}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories />

            <FlatList
                data={["1", "2"]}
                keyExtractor={item => item}
                renderItem={() => (<Link name="Rocketseat" url="https://www.google.com.br" onDetails={() => console.log("Clicou")} />)}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal visible={true} transparent>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>
                                Curso
                            </Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>
                            Rocketseat
                        </Text>
                        <Text style={styles.modalURL}>
                            https://www.google.com.br
                        </Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary"></Option>
                            <Option name="Abrir" icon="language"></Option>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>

    )
}
