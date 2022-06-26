import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import logo from './tinder_logo.png'
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
        <IconButton>
            <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>

        <img src= {logo} className="header_logo" alt="tinder_logo" />

        <IconButton>
            <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>
        
    </div>
  )
}

export default Header