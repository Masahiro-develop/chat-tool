import React, { useEffect, useState } from "react";
import { limitToLast, onValue, query, ref } from "@firebase/database";
import { List } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { database } from "../firebase";
import MessageItem from "./MessageItem";

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        width: "100%",
        overflow: "auto"
    }
})

export default function MessageList() {
    const [messages, setMessages] = useState([]);
    const classes = useStyles()

    useEffect(() => {
        const messageRef = query(ref(database, "messages"), limitToLast(20));
        onValue(messageRef, (snapshot) => {
            const gotMessages = snapshot.val()
            if (gotMessages === null) return
            const entries = Object.entries(gotMessages);
            const newMessages = entries.map((entry) => {
                const [key, nameAndText] = entry;
                return { key, ...nameAndText };
            })
            setMessages(newMessages);
        });
    }, []);

    const length = messages.length;

    return (
        <List className={classes.root}>
            {messages.map((message, index) => {
                const isLastMessage = length === index + 1;
                return <MessageItem
                    isLastMessage={isLastMessage}
                    key={message.key}
                    name={message.name}
                    text={message.text}
                />
            })}
        </List>
    )
}