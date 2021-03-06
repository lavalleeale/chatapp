import { io } from 'socket.io-client';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useState } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Header from './components/Header';
import Chat from './components/Chat';
import LoginForm from './components/LoginForm';

let parsedData;

const webSocket = io('wss://alextesting.ninja/', {
  path: '/chatApp/socket',
});

function App() {
  const [cookies, setCookie] = useCookies(['info']);

  const [messages, setMessages] = useState('\n'.repeat(window.outerWidth / 50));
  const [info, setInfo] = useState({ theme: 'darkTheme' });
  const [serverInfo, setServerInfo] = useState([]);

  function setInfoWrapper(newInfo) {
    setCookie('info', newInfo, {
      path: '/',
      domain: window.location.host,
      secure: true,
    });
    setInfo(newInfo);
    if (!info.username) {
      return webSocket.emit('newUser', JSON.stringify(newInfo));
    } if (info.username !== newInfo.username && info.room === newInfo.room) {
      return webSocket.emit('changeName', JSON.stringify({
        oldName: info.username,
        newName: newInfo.username,
      }));
    } if (info.username === newInfo.username && info.room !== newInfo.room) {
      return webSocket.emit('changeRoom', newInfo.room);
    } if (info.username === newInfo.username && info.room === newInfo.room) {
      return true;
    }
    return webSocket.emit('changeInfo', JSON.stringify(newInfo));
  }

  webSocket.removeAllListeners();

  webSocket.on('update', (data) => {
    setMessages(messages.split('\n').slice(1).join('\n') + data);
  });
  webSocket.on('newUser', (data) => { setMessages(`${messages.split('\n').slice(1).join('\n')}${data} has joined the chat\n`); });
  webSocket.on('changeName', (data) => {
    parsedData = JSON.parse(data);
    setMessages(`${messages.split('\n').slice(1).join('\n')}${parsedData.oldName} has changed their name to ${parsedData.newName}\n`);
  });
  webSocket.on('delUser', (data) => { setMessages(`${messages.split('\n').slice(1).join('\n')}${data} has left the chat\n`); });

  webSocket.on('serverInfo', ((data) => { setServerInfo(JSON.parse(data)); }));

  const themes = {
    darkTheme: createMuiTheme({
      palette: {
        type: 'dark',
      },
    }),
    lightTheme: createMuiTheme({
      palette: {
        type: 'light',
      },
    }),
  };
  function sendMessage(messageText) {
    if (messageText === '/clear') {
      setMessages('\n'.repeat(window.outerWidth / 50));
    } else {
      webSocket.emit('sendMessage', `${info.username}: ${messageText}\n`);
    }
  }
  return (
    <ThemeProvider theme={themes[info.theme]}>
      <CssBaseline />
      <Header info={info} />
      <Router>
        <Route exact path="/">
          {!info.username && (cookies.info ? setInfoWrapper(cookies.info) : <Redirect to="login" push />)}
          <Chat
            messages={messages}
            sendMessageFunc={(messageText) => sendMessage(messageText)}
            username={info.username}
          />
        </Route>
        <Route exact path="/login">
          <LoginForm
            setInfoWrapper={(newInfo) => setInfoWrapper(newInfo)}
            username={info.username}
            mainTheme={info.theme}
            serverInfo={serverInfo}
          />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
