import { Button, Text, View } from "react-native";
import React from "react";
import {useRouter} from "expo-router";

export default function Personagens() {
    const router = useRouter();
    const id = 1;
    return(
        <View>
        <Text>Lista de personagens</Text>
        <Text>Lista de nomes</Text>
        <Button 
        title={`Personagem - ${id}`}
        onPress={() => router.push(`/personagens/${id}/`)}
         />
        </View>
    );
}