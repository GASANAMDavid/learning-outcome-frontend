import React from 'react';
import {
  Card, CardContent, CardHeader, Fab,
} from '@material-ui/core';

const Version = ({ date, title }) => (
  <div style={{ height: '200px', width: '350px', margin: '16px' }}>
    <Card style={{ height: '100%', width: '350px' }}>
      <CardHeader
        title={title}
        subheader={date}
        style={{ textAlign: 'center' }}
      />
      <CardContent style={{ textAlign: 'center' }}>
        <Fab variant="extended" color="primary" aria-label="add">
          view
        </Fab>
      </CardContent>
    </Card>
  </div>
);
export default Version;
