import React, {useState, useEffect} from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SideDrawer from './SideDrawer';

const Header = () => {
    const[drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    }



    return (
        <AppBar position="fixed" 
        style={{ 
            backgroundColor: '#2f2f2f',
            boxShadow: 'none',
            padding:'10px 0px' 
            }}
            >
            <Toolbar>
                <div className= "header_logo">
                    <div className="font_righteous header_logo_venue">The Venue</div>
                    <div className="header_logo_title">Musical Events</div>
                </div>

                <IconButton
                aria-label= "Menu"
                color="inherit"
                onClick={()=> toggleDrawer(true)}


                >
                    <MenuIcon/>
                </IconButton>

                <SideDrawer
                
                open= {drawerOpen}
                onClose={(value)=> toggleDrawer(value)}
                
                
                />







            </Toolbar>
        </AppBar>
    );
}

export default Header;
