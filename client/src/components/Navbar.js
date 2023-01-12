import React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from "./Navbar.module.css";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

const Navbar = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.navbar_header}>
                <div className={styles.navbar_headerLeft}>
                    <div className={styles.listView}>
                        <p>List View</p>
                        <IconButton className={styles.listView_icon}>
                            <ViewListIcon onClick = {() => navigate("/")}/>
                        </IconButton>
                    </div>
                        
                    <div className={styles.addPlayer}>
                        <p>Add Player</p>
                        <IconButton className={styles.addPlayer_icon}>
                            <AddCircleIcon onClick = {() => navigate("/addplayer")}/>
                        </IconButton>
                    </div>
                </div>

                <div className={styles.navbar_headerRight}>
                    <div className={styles.login}>
                        <p>Login</p>
                        <IconButton className={styles.login_icon}>
                            <LoginIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;