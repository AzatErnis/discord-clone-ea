import React from 'react'
import './ChatHeader.css'
import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="chat-header--left">
        <h3>
          <span className="chat-header__hash">#</span>
          Test Chanel Name
        </h3>
      </div>
      <div className="chat-header--right">
        <Notifications className="icon" />
        <EditLocationRounded className="icon" />
        <PeopleAltRounded className="icon" />
        <div className="chat-header__search">
          <input type="text" placeholder="search" />
          <SearchRounded className="icon" />
        </div>
        <SendRounded className="icon" />
        <HelpRounded className="icon" />
      </div>
    </div>
  )
}

export default ChatHeader
