import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link as LinkRouter } from 'react-router-dom'
import './barra.css'
import red from '@mui/material/colors';
/* import { connect } from '../../BackEnd/rutas/UserRutas'; */
import { AppRegistrationOutlined } from '@mui/icons-material';
import { connect } from 'react-redux';
import UserActions from '../Redux/action/registroAction';
import Avatar from '@mui/material/Avatar';



const pages = ['Home', 'Cities'];
const account = ['User']

function Barra2(props) {
    console.log(props);
    const [auth, setAuth] = React.useState(true);
    const [AnchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);



    const handleChange = (event) => {
        setAuth(event.target.checked);
        props.signOut(props.usuario.email)

    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };





    return (
        <Box sx={{ flexGrow: 1 }} id='BarraArriba'>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={auth ? 'Logout' : 'Login'}
                />
            </FormGroup>
            <AppBar position="static" id='barraAbajo'>
                <Toolbar>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"

                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorElNav={AnchorElNav}
                        anchorOrigin={{
                            vertical: 'calc(top -10)',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'calc(top -10)',
                            horizontal: 'left',
                        }}
                        open={Boolean(AnchorElNav)}
                        onClose={handleCloseNavMenu}
                    >
                        {pages.map((page) => (
                            <LinkRouter to={page}>
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" key={page}>{page}</Typography>
                                </MenuItem></LinkRouter>))}

                    </Menu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MyTinerary<sup style={{ fontSize: "0.7rem" }}>®</sup>
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                {props.usuario ? <Avatar alt="Remy Sharp" src={props.usuario.image} /> :
                                    <AccountCircle id="accountcircle" />}
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >{props.usuario == null ?
                                (
                                    account.map((account) => (
                                        <LinkRouter to={`/user/${account}`}>
                                            <MenuItem key={account} onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center">{account}</Typography>
                                            </MenuItem></LinkRouter>))
                                ) : (
                                    <LinkRouter to={`/`}>
                                        <MenuItem key={account} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">Close session</Typography>
                                        </MenuItem></LinkRouter>)
                                }
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box >
    );
}

const mapStateToProps = (state) => {
    return {
        usuario: state.UseReduc.usuario,
    }
}

const mapDispatchToProps = {
    signOut: UserActions.signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Barra2)