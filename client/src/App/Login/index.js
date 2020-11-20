/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { Mail } from '@material-ui/icons/';
import { Alert } from '@material-ui/lab';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
  TextField,
  // Link,
  Button,
  Card,
  InputAdornment,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { login } from '../../store/action/auth';

// == style
const useStyles = makeStyles({
  blocPageLogin: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '500px',
    margin: 'auto',
    // alignItems: 'center',
  },
  cardStyle: {
    margin: '0.5em',
    padding: '1em',
    width: 'auto',
    backgroundColor: 'white',
    // margin: '0.5em 1em',
    // // padding: '0 .5em !important',
    // padding: '1em',
    borderRadius: '4px',
    boxShadow: '0 3px 5px 2px rgba(75, 84, 111, .3)',
  },
  textField: {
    paddingBottom: '1em',
    // height: '40px',
  },
  buttonLogin: {
    backgroundColor: '#2F80ED',
    color: 'white',
  },
  iconEye: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [togglePassword, setTogglePassword] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();
  // == traitement erreur auth
  let errorAuthJSX;
  const { errorAuth } = useSelector((state) => state);

  if (errorAuth) {
    errorAuthJSX = (
      <Alert
        style={{ marginBottom: '2em' }}
        severity="error"
      >
        {' '}
        {errorAuth}
      </Alert>
    );
  }
  const handleToggleShowingPassword = () => {
    setTogglePassword(!togglePassword);
  };
  const onSubmit = (data) => {
    dispatch(login({
      history,
      data,
    }));
  };
  console.log(errors);
  return (
    <div className={classes.blocPageLogin}>
      <h2 style={{ color: '#2F80ED', textAlign: 'center' }}>Log-in to your Star Wars account</h2>
      <Card className={classes.cardStyle}>
        <main className="page-login">
          <div className="input-login">
            {errorAuthJSX}
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                error={!!errors.username}
                fullWidth
                variant="outlined"
              // required
                className={classes.textField}
                inputRef={
                    register({
                      required: 'Username is required',
                    })
                  }
                helperText={errors.username ? errors.username.message : null}
                type="text"
                  // id="input-with-icon-textfield"
                label="username"
                name="username"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Mail color="action" />
                    </InputAdornment>
                  ),
                }}
              />
              <div>
                <TextField
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
              // required
                  error={!!errors.password}
                  inputRef={
                  register({
                    required: 'Password is required',
                  })
                  }
                  helperText={errors.password ? errors.password.message : null}
                  name="password"
                  type={togglePassword ? 'text' : 'password'}
                  // id="input-with-icon-textfield"
                  label="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        onClick={handleToggleShowingPassword}
                        className={classes.iconEye}
                        position="end"
                      >
                        <VisibilityIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button
                className={classes.buttonLogin}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </form>
          </div>
        </main>

      </Card>
    </div>
  );
};

export default Login;
