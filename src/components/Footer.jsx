import { Card, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import React from 'react';
import {
  Link,
} from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    margin: 'auto',
    'margin-top': '10px',
    'margin-bottom': '10px',
    maxWidth: 500,
    padding: '30px',
  },
});
const Footer = ({ isLogin }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <p style={{ display: 'inline' }}>
        &copy;Alex Lavallee 2021
      </p>
      {!isLogin
            && (
            <Link to="/login" style={{ float: 'right', textDecoration: 'none' }}>
              <Button variant="outlined">
                return to login
              </Button>
            </Link>
            )}
    </Card>
  );
};

Footer.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default Footer;
