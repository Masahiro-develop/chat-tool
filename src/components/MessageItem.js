import React, { useEffect, useRef } from "react";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { gravatorPath } from "../gravator";

const useStyles = makeStyles({
    inline: {
        display: "inline"
    }
})

export default function MessageItem(props) {
  const classes = useStyles();
  const avatorPath = gravatorPath(props.name);
  const ref = useRef(null);

  useEffect(() => {
    if (props.isLastMessage) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  },[props.isLastMessage])

    return (
        <ListItem alignItems="flex-start" divider={true} ref={ref}>
        <ListItemAvatar>
          <Avatar alt="profielPhoto" src={avatorPath} />
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={
            <React.Fragment>
              <Typography
                className={classes.inline}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.text}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    )
};