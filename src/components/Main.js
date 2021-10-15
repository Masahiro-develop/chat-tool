import { makeStyles } from "@mui/styles";
import React from "react";
import MessageList from "./MessageList";
import MessageInputField from "./MessageInputField";

const useStyles = makeStyles({
    root: {
        display: "grid",
        height: "100vh",
        gridTemplateRows: "1fr auto"
    }
})

export default function Main(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <MessageList />
            <MessageInputField name={props.name} />
        </div>
    )
}