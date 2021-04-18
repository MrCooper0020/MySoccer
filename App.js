import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/view/Home";
import Fases from "./src/view/Fases";
import Games from "./src/view/games";

export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Campeonatos" }}
                />
                <Stack.Screen
                    name="Fases"
                    component={Fases}
                    options={{ title: "Fases" }}
                />
                <Stack.Screen
                    name="Games"
                    component={Games}
                    options={{ title: "Jogos" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
