import { useState } from 'react';
import './App.css';
import SignIn from './SignIn';
import Main from './Main';

function App() {
  const [name, setName] = useState("");
  console.log(name);

  if (name === "") {
    return <SignIn setName={setName} />
  } else {
    return <Main />
  }
}

export default App;
