import React from 'react';
import { AppBar } from '@material-ui/core';

const Header = () => {
    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: '#2f2f2f',
                boxShadow: 'none',
                padding: '10px 0px'
            }}
        >
            {/* AppBar content goes here */}
        </AppBar>
    );
}

export default Header;
