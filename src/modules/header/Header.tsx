import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link,useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, setIsLoggedIn } from '../login/LoginReducer';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const Header: FunctionComponent = () => {
    const classes = useStyles();
    const isLoggedIn = useSelector(getIsLoggedIn);
    const dispatch = useDispatch();
    const history  = useHistory();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
          </Typography>

                        <Button
                            onClick={() => {
                                if (isLoggedIn) {
                                    dispatch(setIsLoggedIn(false))
                                    
                                }
                                history.push('/login')
                            }}
                            color="inherit">{isLoggedIn ? 'Logout' : 'Login'}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header