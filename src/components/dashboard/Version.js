import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, CardContent, CardHeader, Fab,
} from '@mui/material';
import { setVersionIdToBeDisplayed } from '../../redux/actions/getMatricesHistory';

const Version = ({ date, title, versionId }) => {
  const dispatch = useDispatch();
  const handleVersionView = () => {
    dispatch(setVersionIdToBeDisplayed(versionId));
  };
  return (

    <div style={{ height: '170px', width: '350px', margin: '16px' }}>
      <Card style={{ height: '100%', width: '350px' }}>
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
