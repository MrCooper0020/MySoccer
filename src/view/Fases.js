import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import requestApi from "../../service/apiFutebol";
import { ListItem, Avatar, Text } from "react-native-elements";

export default function Fases({ route, navigation }) {
    const campeonato_id = route.params;
    const [fases, setFases] = useState([]);

    useEffect(() => {
        requestApi(
            `https://api.api-futebol.com.br/v1/campeonatos/${campeonato_id}/fases`,
            setFases,
            false
        );
    }, []);

    return (
        <View>
            <StatusBar style="auto" />
            <View>
                {fases.map((item, i) => (
                    <ListItem
                        key={i}
                        bottomDivider
                        onPress={() =>
                            navigation.navigate("Games", {
                                faseId: item.fase_id,
                                campeonatoId: campeonato_id,
                            })
                        }
                    >
                        <ListItem.Content>
                            <ListItem.Title>{item.nome}</ListItem.Title>
                            <ListItem.Subtitle></ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))}
            </View>
        </View>
    );
}
