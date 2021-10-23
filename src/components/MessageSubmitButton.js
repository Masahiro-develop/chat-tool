import { IconButton } from "@mui/material";
import React from "react";
import { pushMessage } from "../firebase"
import SendIcon from '@mui/icons-material/Send';

export default function MessageSubmitButton(props) {
    return (
        <IconButton
            disabled={props.text === ""}
            onClick={() => {
                pushMessage(props.name, props.text);
                props.setText("");
                props.inputEl.current.focus();
            }}
        >
            <SendIcon />
        </IconButton>
    ) 
}