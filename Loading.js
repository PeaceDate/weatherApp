import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Loading weather...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "black"
    },
    text: {
        color: "white",
        fontSize: 30
    }
});