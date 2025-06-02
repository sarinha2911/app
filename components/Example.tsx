import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props{
    example: string
}

export default function Example({example}:Props) {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>{example}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "orange",
    },
    text: {
        fontWeight: "bold"
    }
});