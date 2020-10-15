import React from 'react'
import './Sidebar.css'
// import './App.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SidebarChannel from './SidebarChannel';
import { Headset, Mic, Settings, SignalCellularAlt } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <h3>Clever Programmer</h3>
        <ExpandMoreIcon className="icon" />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channels-header">
          <div className="sidebar__header">
            <ExpandMoreIcon className="icon" />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar__add-channel icon" />
        </div>

        <div className="sidebar__channels-list">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAlt
          className="sidebar__voice-icon"
          fontSize="large"
        />

        <div className="sidebar__voice-info">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voice-icons">
          <InfoOutlinedIcon className="icon" />
          <CallIcon className="icon" />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src="https://scontent.ffru7-1.fna.fbcdn.net/v/t1.0-9/121321209_1447795325424977_2051291639556799408_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=hGb2HJ8Z1pYAX_DHt2J&_nc_ht=scontent.ffru7-1.fna&oh=d6d8bf08415707b7c5dbd237862d7403&oe=5FAACB0C" />
        <div className="sidebar__profile-info">
          <h3>@azaternis</h3>
          <p>#thisIsMyID</p>
        </div>

        <div className="sidebar__profile-icons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>

    </div>
  )
}

export default Sidebar
