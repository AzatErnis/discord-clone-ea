import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

const Message = ({ timestamp, user, message }) => {
  return (
    <div className='message'>
      <Avatar src={user.photo} />

      <div className="message-info">
        <h4 className="message-info__name">
          {user.displayName}
          <span className="message-info__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p className="message-info__msg">
          {message}
        </p>
      </div>
    </div>
  )
}

export default Message
