import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, CardContent, CardHeader, Fab,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { setVersionIdToBeDisplayed } from '../../redux/actions/getMatricesHistory';

const useStyles = makeStyles({
  version: {
    border: '2px solid #2e7d32',
    boxShadow: '5px 15px 5px 5px #888888',
  },
});

const Version = ({ date, title, versionId }) => {
  const dispatch = useDispatch();
  const currentDisplayedVersion = useSelector((state) => state
    .versionToBeDisplayedReducer
    .id);
  const handleVersionView = () => {
    dispatch(setVersionIdToBeDisplayed(versionId));
  };

  const classes = useStyles();
  return (

    <div
      style={{ height: '170px', width: '350px', margin: '10px' }}
    >
      <Card style={{ height: '100%', width: '350px' }} className={currentDisplayedVersion === versionId ? classes.version : null}>
        <CardHeader
          title={title}
          subheader={date}
          style={{ textAlign: 'center' }}
        />
        <CardContent style={{ textAlign: 'center' }}>
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            onClick={handleVersionView}
          >
            view
          </Fab>
        </CardContent>
      </Card>
    </div>
  );
};

Version.defaultProps = {
  date: '',
  versionId: 1,
  title: '',
};

export default Version;
