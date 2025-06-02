import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

export default function Form() {
  const [exibir, setExibir] = useState(false);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  function exibirTexto() {
    return (
      <View>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
        <Text style={styles.text3}>{text3}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Texto 1" onChangeText={setText1} style={styles.input} />
      <TextInput placeholder="Texto 2" onChangeText={setText2} style={styles.input} />
      <TextInput placeholder="Texto 3" onChangeText={setText3} style={styles.input} />

      <Button title="Exibir" onPress={() => setExibir(true)} />

      {exibir ? exibirTexto() : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10
  },
  text1: {
    color: 'red'
  },
  text2: {
    color: 'white'
  },
  text3: {
    color: 'green'
  }
});
