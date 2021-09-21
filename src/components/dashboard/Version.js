import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: '15px',
    width: '500px',
  },
});

const Version = ({ date, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={`Updated At ${date}`}
      />
    </Card>
  );
};

export default Version;
