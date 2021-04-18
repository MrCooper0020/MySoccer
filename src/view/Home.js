import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import axios from "axios";

export default function Home() {
    const [list, setList] = useState([]);

    useEffect(() => {
        requestApi("https://api.api-futebol.com.br/v1/campeonatos", true);
    }, []);

    function requestApi(url, test = false) {
        const liveKey = "live_afa0c0fb4b7cd1d0e4c780715a87a7";
        const testKey = "test_50999e08a946c61bd39229e4e86318";

        const key = test ? testKey : liveKey;

        axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${key}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setList(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <View>
            <StatusBar style="auto" />
            <View>
                {list.map((item, i) => (
                    <ListItem key={i} bottomDivider>
                        <Avatar source={{ uri: item.logo }} />
                        <ListItem.Content>
                            <ListItem.Title>{item.nome}</ListItem.Title>
                            <ListItem.Subtitle>
                                {item.rodada_atual.nome}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))}
            </View>
        </View>
    );
}
