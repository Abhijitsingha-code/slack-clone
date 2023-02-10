import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import {db} from '../firebase'
import { doc, addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatInput = ({ channelId, channelName, chatRef }) => {
    const [message, setMessage] = useState('')
    const channelRef = collection(db, 'rooms', `${channelId}` ,'message');
    const [User] = useAuthState(auth)


    const sendMessage =(e) =>{
        e.preventDefault();

        if(!channelId) return false;

        addDoc(channelRef,{
            message : message,
            timeStamp: serverTimestamp(),
            user: User?.displayName,
            userImage: User?.photoURL,
        })

        chatRef?.current?.scrollIntoView({
            behavior: 'smooth',
          });

        setMessage('')
    }
  return (
    <ChatInputContainer>
            <form>
                <input value={message} onChange={e=> setMessage(e.target.value)} placeholder={`Message #${channelName ? channelName : ''}`}/>
                <Button type='submit' onClick={sendMessage}>Send</Button>
            </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    >form{
        /* position: relative; */
        display: flex;
        justify-content: center;
    }
    >form>input{
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        padding: 20px;
        outline: none;
        border-radius: 5px;
    }
    >form > Button{
        display: none !important;
    }
`;