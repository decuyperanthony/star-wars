import React from 'react';

import {
// useDispatch,
// useSelector,
} from 'react-redux';
import { makeStyles, fade } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
// import { setInputValue } from '../../../../../actions/shop';
// import { setArticleByBrandId } from '../../../../../actions/shop';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
//   blocHosearchBarContainermePage: {

  //   },
  searchBarContainer: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginBottom: '0.5em',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: '28.5em',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      // width: '20ch',
      right: 0,
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    padding: '10px 8px 10px 0',
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // transition: theme.transitions.create('width'),
    // width: '100%',
    [theme.breakpoints.up('md')]: {
      // width: '20ch',
    },
  },

}));

const SearchBar = () => {
  const classes = useStyles();
  const handleChange = (e) => {
    // if (e.target.value === '') {
    //   console.log('cliqué');
    //   getArticles();
    // } else {
    //   getArticleByTitle(e.target.value);
    // }
    console.log('e.target.value', e.target.value);
  };
  return (
    <div className={classes.searchBarContainer}>
      <div className={classes.searchIcon}>
        <SearchIcon
          fontSize="large"
        />

      </div>

      <InputBase
        onChange={handleChange}
          // placeholder={t('shop-navbar-botom-search')}
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
