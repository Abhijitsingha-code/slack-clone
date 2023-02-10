import React from 'react'
import styled from 'styled-components';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {

    const signIn =(e)=>{
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then(()=> console.log('Sucessfully login'))
        .catch((err)=> console.log(err.message))
    }
  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src='https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_unfurl-1.png' alt=''/>
            <h4>Sign in to Slack-clone</h4>
            <p>Abhijit.slack.com</p>
            <Button onClick={signIn}>Signin with google</Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer= styled.div`
 background-color: white;
 height: 100vh;
 display: grid;
 place-items: center;
`;

const LoginInnerContainer= styled.div`
    padding: 60px 100px;
    text-align: center;
    background-color: rgb(74,21,75);
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.12);

    >p{
        color: white;
        font-size: 13px;
    }
    >h4{
        margin-bottom: 10px;
        color: white;
    }

    >img{
        object-fit: contain;
        height: 100px;
        margin-bottom: 20px;
    }
    >Button{
        margin-top: 30px;
        text-transform: inherit !important;
        color: rgb(74,21,75);
        background-color: whitesmoke !important;
    }
`;