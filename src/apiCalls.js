import React from "react";

const create = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response;
};

const display = async (url, userprofile, username="") => {
    if (!userprofile) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userprofile: userprofile}),
        })
        return response.json()
    } else {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userprofile: userprofile,
                username: username
            }),
        })
        return response.json()
    }
}

const delete_item = async (url, id) => {
    const response = await fetch(url, {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: id}),
    })
    return response.json()
}

const add_to_cart = async (url, id, username) => {
    const response = await fetch(url, {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                username: username
            }),
    })
    return response.json()
}


const display_cart = async (url, username) => {
    const response = await fetch(url, {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: username}),
    })
    return response.json()
}

export {create, display, delete_item, add_to_cart, display_cart};
