import { io } from 'socket.io-client'
import LoginForm from './components/LoginForm'
import Chat from './components/Chat'
import Header from './components/Header'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useState } from 'react'
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
var parsedData

var webSocket = io("wss://alextesting.ninja/", {
  path: "/chatApp/socket"
})

function App() {
  const [messages, setMessages] = useState("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
  const [username, setUsermame] = useState('')

  function setUsermameWrapper(newUsername) {
    if (username) {
      webSocket.emit("changeName", JSON.stringify({
        oldName: username,
        newName: newUsername
      }))
    } else {
      webSocket.emit("newUser", newUsername)
    }
    setUsermame(newUsername)
  }

  webSocket.removeAllListeners();

  webSocket.on('update', function (data) {
    setMessages(messages.split('\n').slice(1).join('\n')+data)
  });
  webSocket.on('newUser', function (data) { setMessages(`${messages.split('\n').slice(1).join('\n')}${data} has joined the chat\n`) });
  webSocket.on('changeName', function (data) {
    parsedData = JSON.parse(data)
    setMessages(`${messages.split('\n').slice(1).join('\n')}${parsedData.oldName} has changed their name to ${parsedData.newName}\n`)
  });
  webSocket.on('delUser', function (data) { setMessages(`${messages.split('\n').slice(1).join('\n')}${data} has left the chat\n`) });

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    }
  });
  function sendMessage(messageText) {
    webSocket.emit("sendMessage", `${username}: ${messageText}\n`)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header username={username} />
      <Router>
        <Route exact path="/">
          <Chat messages={messages} sendMessageFunc={(messageText) => sendMessage(messageText)} username={username} />
        </Route>
        <Route exact path="/login">
          <LoginForm setUsernameWrapper={(newUsername) => setUsermameWrapper(newUsername)} />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
