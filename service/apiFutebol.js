import React from "react";
import axios from "axios";

const liveKey = "live_afa0c0fb4b7cd1d0e4c780715a87a7";
const testKey = "test_50999e08a946c61bd39229e4e86318";

export default function requestApi(url, test = false) {
    const key = test ? testKey : liveKey;

    axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${key}`,
            },
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((err) => {
            return err;
        });
}
