import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { makeStyles, fade } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { setInputValue, restartSoldiersState } from '../../../store/action/home';

import getSoldierByName from '../../../utils/getSoldierByName';

const useStyles = makeStyles((theme) => ({
  searchBarContainer: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginBottom: '1.5em',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    width: '85%',
    color: 'inherit',
    [theme.breakpoints.down('xs')]: {
      width: '65%',
    },
  },
  inputInput: {
    padding: '10px 8px 10px 0',
    [theme.breakpoints.up('md')]: {
    },
  },

}));

const SearchBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { inputValue } = useSelector((state) => state);

  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value));

    if (e.target.value === '') {
      dispatch(restartSoldiersState());
    } else {
      getSoldierByName(e.target.value);
    }
    // event = e;
    // React.useEffect(() => {
    // setTimeout(() => {
    //   console.log('This will run after 350 ms!');
    //   dispatch(setInputValue(event.target.value));
    //   // setInputStateValue(e.target.value);
    //   if (event.target.value === '') {
    //     dispatch(restartSoldiersState());
    //   } else {
    //     getSoldierByName(event.target.value);
    //   }
    // }, 350);
    //   return () => clearTimeout(timer);
    // }, []);
  };
  return (
    <div className={classes.searchBarContainer}>
      <div className={classes.searchIcon}>
        <SearchIcon
          fontSize="large"
        />
      </div>
      <InputBase
        value={inputValue}
        onChange={handleChange}
        placeholder="luke..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default SearchBar;
