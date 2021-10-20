/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Card, CardContent, CardHeader,
  Divider, TextField, Box, InputLabel,
  MenuItem, FormControl, Select, Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: '50em',
    border: '1px solid rgba(0, 20, 0)',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridGap: '15px',
  },
  item: {
    width: '20em',
    margin: '5% auto',
  },
  saveChanges: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px 50px 10px 0',
  },
  saveBtn: {
    borderRadius: '15px',
    marginLeft: '10px',
    backgroundColor: 'rgb(86, 100, 210)',
    color: 'white',
    '&:hover': {
      background: 'rgb(86, 100, 90)',
    },
  },
  backBtn: {
    borderRadius: '15px',
    marginLeft: '10px',
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      background: 'rgb(86, 100, 90)',
    },
  },
});

const UserInfo = (props) => {
  const history = useHistory();
  const [selectedRole, setSelectedRole] = React.useState(props.profile.role.id);
  const classes = useStyles();
  const roles = useSelector((state) => state.rolesReducer.roles);

  const handleRoleSelected = (event) => {
    const newRole = roles.find((role) => role.id === event.target.value);
    props.onSelectedRoleChange(newRole);
    setSelectedRole(event.target.value);
  };

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader title={props.title} />
      <Divider />
      <CardContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={classes.content}
        >
          <TextField
            className={classes.item}
            label="First Name"
            variant="outlined"
            id="first-name"
            placeholder="first name *"
            value={props.profile.first_name}
            focused
            onChange={props.onChange('first_name')}
          />
          <TextField
            className={classes.item}
            label="Last Name"
            variant="outlined"
            placeholder="last name *"
            value={props.profile.last_name}
            focused
            onChange={props.onChange('last_name')}
          />
          <TextField
            className={classes.item}
            label="Email"
            variant="outlined"
            placeholder="email *"
            value={props.profile.email}
            disabled={props.disabledEmailComponent}
            focused
            onChange={props.onChange('email')}
          />
          {props.isCreateAccount && (
            <TextField
              className={classes.item}
              label="Password"
              variant="outlined"
              type="password"
              placeholder="password"
              value={props.profile.password}
              focused
              onChange={props.onChange('password')}
            />
          )}
          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            className={classes.item}
            disabled={props.disableRoleField}
          >
            <InputLabel id="select-role">role</InputLabel>
            <Select
              labelId="select-role"
              value={selectedRole}
              label="Role"
              onChange={handleRoleSelected}
            >
              {roles.map((role) => (
                <MenuItem value={role.id} key={role.id}>{role.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Divider />
        <Box className={classes.saveChanges}>
          {!props.userAccount && (
            <Button
              className={classes.backBtn}
              onClick={() => history.push('/dashboard/users')}
              id="back"
            >
              back
            </Button>
          )}
          <Button
            className={classes.saveBtn}
            onClick={props.onSave}
            color="primary"
            id="save"
          >
            {props.action}

          </Button>
        </Box>

      </CardContent>
    </Card>
  );
};

UserInfo.defaultProps = {
  disableRoleField: false,
  userAccount: false,
  isCreateAccount: false,
  profile: {
    first_name: '', last_name: '', email: '', password: '', role: { id: '', name: '' },
  },

};

export default UserInfo;
