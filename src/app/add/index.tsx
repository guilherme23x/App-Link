import { useState } from "react";
import { View, Text, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { colors } from "@/styles/colors";
import { router } from "expo-router"
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { linkStorage } from "@/storage/link-storage";

export default function Add() {

    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setURL] = useState("")


    async function handleAdd() {
        try {
            if (!category) {
                return Alert.alert("Categoria", "Selecione uma categoria, por favor!")
            }
            if (!name.trim()) {
                return Alert.alert("Nome", "Informe o nome, por favor!")
            }
            if (!url.trim()) {
                return Alert.alert("URL", "Informe a URL, por favor!")
            }
            await linkStorage.save({
                id: new Date().getTime().toString(),
                name, url, category
            })

            Alert.alert("Sucesso", "Novo link adicionado!", [{ text: "Ok", onPress: () => router.back() }])

        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar o link")
        }
    }

    return (
        <ImageBackground source={require("@/assets/wallpaper.jpeg")} style={styles.container}>
            <View style={styles.containerContent}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                    </TouchableOpacity>

                    <Text style={styles.title}>Novo</Text>
                </View>
                <Text style={styles.label}>Selecione uma Categoria</Text>
                <Categories onChange={setCategory} selected={category} />

                <View style={styles.form}>
                    <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
                    <Input placeholder="URL" onChangeText={setURL} autoCapitalize="none" autoCorrect={false} />

                    <Button title="Adicionar" onPress={handleAdd} />
                </View>

            </View>
        </ImageBackground>
    )
}
