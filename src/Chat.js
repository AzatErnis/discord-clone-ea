import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>

      <div className="chat__input">
        <AddCircle />
        <form action="">
          <input type="text" placeholder={'Nessage #TESTCHANNEL'} />
          <button className="chat__input-btn" type="submit">Send Message</button>
        </form>
        <div className="chat__input-icons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default Chat
