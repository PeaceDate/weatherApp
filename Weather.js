import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "ios-thunderstorm",
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "ios-rainy",
        title: "Drizzle",
    },
    Rain: {
        iconName: "ios-rainy",
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "ios-snow",
        title: "Cold as balls",
    },
    Mist: {
        iconName: "ios-cloudy",
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Smoke: {
        iconName: "ios-cloudy",
        title: "Smoke",
        subtitle: "Just don't go outside."
    },
    Haze: {
        iconName: "ios-cloudy",
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Dust: {
        iconName: "ios-cloudy",
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Fog: {
        iconName: "ios-cloudy",
        title: "Fog",
        subtitle: "Just don't go outside."
    },
    Sand: {
        iconName: "ios-cloudy",
        title: "Sandy",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Ash: {
        iconName: "ios-cloudy",
        title: "Ash",
        subtitle: "Just don't go outside."
    },
    Squall: {
        iconName: "ios-cloudy",
        title: "Squall",
        subtitle: "Just don't go outside."
    },
    Tornado: {
        iconName: "ios-cloudy",
        title: "Tornado",
        subtitle: "Just don't go outside."
    },
    Clear: {
        iconName: "ios-sunny",
        title: "Nice and sunny",
        subtitle: "Time to go outside!"
    },
    Clouds: {
        iconName: "ios-cloudy",
        title: "Clouds",
        subtitle: "Just don't go outside."
    }
};

export default function Weather({temp, conditions}) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <Ionicons name={weatherOptions[conditions].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[conditions].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[conditions].subtitle}</Text>
            </View>
        </View>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    conditions: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        color: "white",
        fontSize: 42
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    }
});
