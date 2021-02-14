import { Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Footer from './Footer';
import SendMessage from './SendMessage';

const useStyles = makeStyles({
  card: {
    margin: 'auto',
    'margin-top': '10px',
    'margin-bottom': '10px',
    maxWidth: 500,
    padding: '10px',
  },
});
const Chat = ({ messages, sendMessageFunc }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <pre>
          {messages}
        </pre>
      </Card>
      <SendMessage sendMessageFunc={sendMessageFunc} />
      <Footer isLogin={false} />
    </>
  );
};

Chat.propTypes = {
  sendMessageFunc: PropTypes.func.isRequired,
  messages: PropTypes.string.isRequired,
};

export default Chat;
