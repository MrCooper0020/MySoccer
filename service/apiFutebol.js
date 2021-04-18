import React from "react";
import axios from "axios";

const liveKey = "live_ea17f8460df3d0ad0c5ac8ba1f0cea";
const testKey = "test_fc5f2e831171aebc8732003edc4f9f";

export default function requestApi(url, setState, forGames, test = false) {
    const key = test ? testKey : liveKey;

    console.log("Url:", url);

    axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${key}`,
            },
        })
        .then((response) => {
            console.log(response.data.chaves);

            if (forGames) {
                setState(response.data.chaves);
            } else {
                setState(response.data);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
