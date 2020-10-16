import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SidebarChannel from './SidebarChannel';
import { Headset, Mic, Settings, SignalCellularAlt } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';

function Sidebar() {
  const user = useSelector(selectUser)
  const [channels, setChannels] = useState([])

  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot => (
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        channel: doc.data()
      })))
    ))
  }, [])

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name')

    if (channelName) {
      db.collection('channels').add({
        channelName,
      })
    }
  }

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

          <AddIcon
            className="sidebar__add-channel icon"
            onClick={handleAddChannel}
          />
        </div>

        <div className="sidebar__channels-list">
          {
            channels.map(({ channel, id }) => (
              <SidebarChannel
                key={id}
                id={id}
                channelName={channel.channelName}
              />
            ))
          }
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
        <Avatar
          className="icon"
          onClick={() => auth.signOut()}
          src={user.photo}
        />
        <div className="sidebar__profile-info">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profile-icons">
          <Mic className="icon" />
          <Headset className="icon" />
          <Settings className="icon" />
        </div>
      </div>

    </div>
  )
}

export default Sidebar
