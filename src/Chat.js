import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { selectChannelId, selectChannelName } from './features/appSlice'
import db from './firebase'
import firebase from 'firebase'

const Chat = () => {

  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId)
  const channelName = useSelector(selectChannelName)
  const [input, setinput] = useState('')
  const [messages, setmessages] = useState([])

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot =>
          setmessages(snapshot.docs.map(doc => doc.data())))
    }
  }, [channelId])

  const sendMessage = e => {
    e.preventDefault()

    db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user
      })

    setinput('')
  }

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {
          messages.map(message => (
            <Message
              timestamp={message.timestamp}
              message={message.message}
              user={message.user}
            />
          ))
        }
      </div>

      <div className="chat__input">
        <AddCircle />
        <form action="">
          <input
            value={input}
            disabled={!channelId}
            onChange={e => setinput(e.target.value)}
            type="text"
            placeholder={`Message #${channelName}`}
          />
          <button
            className="chat__input-btn"
            onClick={sendMessage}
            type="submit">
            Send Message
            </button>
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
