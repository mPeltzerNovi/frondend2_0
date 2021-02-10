import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import {AuthContext, useAuthState} from "../context/AuthContext";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar } from "@material-ui/core";


function Header() {
    const history = useHistory();
    const { user } = useAuthState(); //Nice; dit in combi met {user.username} op R74 geeft username in de header

    //context dingen

    const { isAuthenticated } = useAuthState();
    const { logout } = useContext(AuthContext);

    //useEffect(() => {
    //  if (isAuthenticated === false) {
    //    history.push('/signin');
    //  }
    //}, [isAuthenticated]);

    return (
        <header>
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/en/8/8c/Facebook_Home_logo_old.svg" alt=""/>
                <div className="header_input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>



            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header-right">




                {/*<Button>
                    Hallo daar!
                </Button>*/}


                {isAuthenticated ? (
                    <>
                        <div className="header_info">
                            <Avatar />
                            <h4>{user.username}</h4>
                                <button
                                    type="button"
                                    onClick={() => logout()}
                                >
                                    Log uit
                                </button>
                        </div>
                    </>

                ) : (
                    <>
                        <button
                            type="button"
                            onClick={() => history.push('/signin')}
                        >
                            Log in
                        </button>
                        <button
                            type="button"
                            onClick={() => history.push('/signup')}
                        >
                            Registreren
                        </button>

                    </>
                )}
            </div>



        </header>
    );
};

export default Header;