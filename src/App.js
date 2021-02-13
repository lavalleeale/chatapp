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
  Redirect
} from "react-router-dom";
var parsedData

var webSocket = io("wss://alextesting.ninja/", {
  path: "/chatApp/socket"
})

function App() {
  const [messages, setMessages] = useState("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
  const [info, setInfo] = useState({})

  function setInfoWrapper(newInfo) {
    if (!info.username) {
      webSocket.emit("newUser", JSON.stringify(newInfo))
    } else if (info.username !== newInfo.username && info.room === newInfo.room) {
      webSocket.emit("changeName", JSON.stringify({
        oldName: info.username,
        newName: newInfo.username
      }))
    } else if (info.username === newInfo.username && info.room !== newInfo.room) {
      webSocket.emit("changeRoom", newInfo.room)
    } else {
      webSocket.emit("changeInfo", JSON.stringify(newInfo))
    }
    setInfo(newInfo)
  }

  webSocket.removeAllListeners();

  webSocket.on('update', function (data) {
    setMessages(messages.split('\n').slice(1).join('\n') + data)
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
    webSocket.emit("sendMessage", `${info.username}: ${messageText}\n`)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header info={info} />
      <Router>
        <Route exact path="/">
          {!info.username && <Redirect to="/login" push />}
          <Chat messages={messages} sendMessageFunc={(messageText) => sendMessage(messageText)} username={info.username} />
        </Route>
        <Route exact path="/login">
          <LoginForm setInfoWrapper={(newInfo) => setInfoWrapper(newInfo)} username={info.username} />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
