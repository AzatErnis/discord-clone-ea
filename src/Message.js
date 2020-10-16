import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

const Message = () => {
  return (
    <div className='message'>
      <Avatar src="https://scontent.ffru7-1.fna.fbcdn.net/v/t1.0-9/121321209_1447795325424977_2051291639556799408_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=hGb2HJ8Z1pYAX_DHt2J&_nc_ht=scontent.ffru7-1.fna&oh=d6d8bf08415707b7c5dbd237862d7403&oe=5FAACB0C" />

      <div className="message-info">
        <h4 className="message-info__name">
          Azar Ernis
          <span className="message-info__timestamp">
            this is a timestamp
          </span>
        </h4>
        <p className="message-info__msg">
          this is a message
        </p>
      </div>
    </div>
  )
}

export default Message
