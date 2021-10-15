import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function MessageField(props) {
    const [isComposed, setIsComposed] = useState(false);
    console.log(props.text);
    return (
        <TextField
            value={props.text}
            variant="standard"
            fullWidth
            onChange={(e) => { props.setText(e.target.value) }}
            onKeyDown={(e) => {
                const input = e.target.value;
                if (input === "") return;
                if (e.key === "Enter" && isComposed === false) {
                    console.log("firebaseに送信中");
                    props.setText("");
                  e.preventDefault();
                }
              }}
            onCompositionStart={() => {setIsComposed(true)}}
            onCompositionEnd={() => {setIsComposed(false)}}
        />
    )
}