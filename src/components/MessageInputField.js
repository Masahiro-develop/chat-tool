import React, { useState } from "react";
import { Avatar, Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { gravatorPath } from "../gravator";
import MessageField from "./MessageField"

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: "26px"
    }
})

export default function MessageInputField(props) {
    const [text, setText] = useState("")
    const classes = useStyles()
    const avatorPath = gravatorPath("hahaha")
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid xs={1}>
                    <Avatar src={avatorPath} />
                </Grid>
                <Grid xs={10}>
                    <MessageField name={props.name} text={text} setText={setText} />
                </Grid>
                <Grid xs={1}>ボタン</Grid>
            </Grid>
        </div>
    )
}