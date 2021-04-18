import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import requestApi from "../../service/apiFutebol";
import { ListItem, Avatar, Text } from "react-native-elements";

export default function Games({ route, navigation }) {
    const { campeonatoId, faseId } = route.params;
    const [games, setGames] = useState([]);

    useEffect(() => {
        requestApi(
            `https://api.api-futebol.com.br/v1/campeonatos/${campeonatoId}/fases/${faseId}`,
            setGames,
            true
        );
    }, []);

    return (
        <View>
            <StatusBar style="auto" />
            <SafeAreaView>
                <ScrollView>
                    {games.map((item, i) => {
                        if (item.partida_ida.status == "finalizado") {
                            return (
                                <ListItem key={i} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            {
                                                item.partida_ida.time_mandante
                                                    .nome_popular
                                            }{" "}
                                            X{" "}
                                            {
                                                item.partida_ida.time_visitante
                                                    .nome_popular
                                            }
                                        </ListItem.Title>
                                        <ListItem.Subtitle
                                            style={{ marginTop: 10 }}
                                        >
                                            <View>
                                                <Text>
                                                    Resultado partida volta:{" "}
                                                    {item.partida_ida.placar}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text>
                                                    {item.partida_volta.placar
                                                        ? `Resultado partida ida: ${item.partida_ida.placar}`
                                                        : ""}
                                                </Text>
                                            </View>
                                        </ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            );
                        }
                    })}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
