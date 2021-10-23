import { TextField } from "@mui/material";
import React, { useState } from "react";
import { pushMessage } from "../firebase";

export default function MessageField(props) {
  const [isComposed, setIsComposed] = useState(false);
  
    return (
      <TextField
        inputRef={props.inputEl}
        value={props.text}
        variant="standard"
        fullWidth
        onChange={(e) => { props.setText(e.target.value) }}
        onKeyDown={(e) => {
            const input = e.target.value;
            if (input === "") return;
            if (e.key === "Enter" && isComposed === false) {
              pushMessage(props.name, props.text);
                props.setText("");
              e.preventDefault();
            }
          }}
        onCompositionStart={() => {setIsComposed(true)}}
        onCompositionEnd={() => {setIsComposed(false)}}
        />
    )
}