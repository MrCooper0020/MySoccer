import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import requestApi from "../../service/apiFutebol";

export default function Home({ navigation }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        requestApi(
            "https://api.api-futebol.com.br/v1/campeonatos",
            setList,
            false
        );
    }, []);

    return (
        <View>
            <StatusBar style="auto" />
            <SafeAreaView>
                <ScrollView>
                    {list.map((item, i) => (
                        <ListItem
                            key={i}
                            bottomDivider
                            onPress={() =>
                                navigation.navigate("Fases", item.campeonato_id)
                            }
                        >
                            <Avatar source={{ uri: item.logo }} />
                            <ListItem.Content>
                                <ListItem.Title>{item.nome}</ListItem.Title>
                                <ListItem.Subtitle>
                                    Status: {item.status}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
