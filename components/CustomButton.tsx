import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
    title: string;
    onPress: () => void
}

export default function CustomButton({title, onPress}: Props){
    return (
        <TouchableOpacity style={styleS.button} onPress={onPress}>
            <Text style={styleS.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styleS = StyleSheet.create({
    button: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5
    },
    text: {
        fontWeight: 'bold'
    }
})