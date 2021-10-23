import React, { useRef, useState } from "react";
import { Avatar, Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { gravatorPath } from "../gravator";
import MessageField from "./MessageField"
import MessageSubmitButton from "./MessageSubmitButton";

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: "26px"
    }
})

export default function MessageInputField(props) {
    const inputEl = useRef(null)
    const [text, setText] = useState("")
    const classes = useStyles()
    const avatorPath = gravatorPath(props.name)
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid　item xs={1}>
                    <Avatar src={avatorPath} />
                </Grid>
                <Grid　item xs={10}>
                    <MessageField
                        inputEl={inputEl}
                        name={props.name}
                        text={text}
                        setText={setText}
                    />
                </Grid>
                <Grid item xs={1}>
                    <MessageSubmitButton
                        inputEl={inputEl}
                        name={props.name}
                        text={text}
                        setText={setText}
                    />
                </Grid>
            </Grid>
        </div>
    )
}