import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {'Msahiro Hayashi.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn(props) {
  const [checkInput, setCheckInput] = React.useState(true);
  const [input, setInput] = React.useState("");
  const [isComposed, setIsComposed] = React.useState(false);

  React.useEffect(() =>
  {
    const checkBool = input === ""
    setCheckInput(checkBool)
  },
    [input]
  )

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box component="form" noValidate sx={{
            mt: 1,
            width: "90%"
          }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              autoFocus
              value={input}
              onChange={(e) => { setInput(e.target.value) }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && isComposed === false) {
                  props.setName(input);
                  e.preventDefault();
                }
              }}
              onCompositionStart={() => {setIsComposed(true)}}
              onCompositionEnd={() => {setIsComposed(false)}}
            />
            <Button
              type="button"
              disabled={checkInput}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                props.setName(input)
              }}
            >
              はじめる
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}