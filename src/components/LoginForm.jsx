import {
  Card, TextField, Button, FormControl, InputLabel, Select, MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Footer from './Footer';

const useStyles = makeStyles({
  card: {
    margin: 'auto',
    'margin-top': '10px',
    'margin-bottom': '10px',
    maxWidth: 500,
    padding: '30px',
  },
  textField: {
    'margin-top': '10px',
    'margin-bottom': '10px',
  },
});
let error = false;
let errorChanged = false;

const LoginForm = ({
  setInfoWrapper, username, mainTheme, serverInfo,
}) => {
  const classes = useStyles();
  const [usernameText, setUsernameText] = useState(username);
  const [roomText, setRoomText] = useState('Lobby');
  const [theme, setTheme] = useState(mainTheme);
  const [customRoomText, setCustomRoomText] = useState('');
  const [finished, setFinished] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (roomText === 'Custom') {
      setInfoWrapper({
        username: usernameText,
        room: customRoomText,
        theme,
      });
    } else {
      setInfoWrapper({
        username: usernameText,
        room: roomText,
        theme,
      });
    }
    return setFinished(true);
  };
  errorChanged = false;
  if (usernameText !== username) {
    serverInfo.forEach((client) => {
      if (usernameText === client.username) {
        if (!error) {
          error = true;
          errorChanged = true;
          // eslint-disable-next-line no-useless-return
          return;
        }
      }
    });
    if (error && !errorChanged) {
      error = false;
    }
  }
  return (
    <>
      {finished && <Redirect to="" push />}
      <Card variant="outlined" className={classes.card}>
        <form onSubmit={onSubmit}>
          <TextField
            error={error}
            helperText="Username in use"
            required
            className={classes.textField}
            style={{ width: '100%' }}
            value={usernameText}
            onChange={(e) => setUsernameText(e.target.value)}
            label="Username"
            variant="outlined"
          />
          <FormControl variant="outlined" style={{ width: 'calc(50% - 5px)', marginTop: '10px' }}>
            <InputLabel>Room</InputLabel>
            <Select
              label="Room"
              value={roomText}
              onChange={(e) => setRoomText(e.target.value)}
            >
              <MenuItem value="Lobby">Lobby</MenuItem>
              <MenuItem value="Breakout 1">Breakout 1</MenuItem>
              <MenuItem value="Breakout 2">Breakout 2</MenuItem>
              <MenuItem value="Custom">Custom</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" style={{ width: 'calc(50% - 5px)', marginTop: '10px', marginLeft: '10px' }}>
            <InputLabel>Theme</InputLabel>
            <Select
              label="Theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <MenuItem value="darkTheme">Dark</MenuItem>
              <MenuItem value="lightTheme">Light</MenuItem>
            </Select>
          </FormControl>
          {roomText === 'Custom' && (
          <TextField
            required
            className={classes.textField}
            style={{ width: '100%' }}
            value={customRoomText}
            onChange={(e) => setCustomRoomText(e.target.value)}
            label="Room Name"
            variant="outlined"
          />
          )}
          <Button disabled={error} style={{ float: 'right', marginTop: '10px' }} variant="outlined" type="submit">Submit</Button>

        </form>
      </Card>
      {!!serverInfo.length && (
      <Card className={classes.card}>
        <h2> Online Users: </h2>
        {serverInfo.map((client) => (
          <div key={client.username} style={{ overflow: 'hidden' }}>
            <p style={{ float: 'left' }}>
              {`User: ${client.username}`}
            </p>
            <p style={{ float: 'right' }}>
              {`Room: ${client.room}`}
            </p>
          </div>
        ))}
      </Card>
      )}
      <Footer isLogin />
    </>
  );
};

LoginForm.defaultProps = {
  username: '',
  mainTheme: 'darkTheme',
};

LoginForm.propTypes = {
  setInfoWrapper: PropTypes.func.isRequired,
  username: PropTypes.string,
  mainTheme: PropTypes.string,
  serverInfo: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
  })).isRequired,
};

export default LoginForm;
