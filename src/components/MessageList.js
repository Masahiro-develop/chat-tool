import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
    root: {
        gridRow: 1
    }
})

export default function MessageList() {
    const classes = useStyles()
    return <div className={classes.root}>message list</div>
}