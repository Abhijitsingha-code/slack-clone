import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading] = useAuthState(auth)
  return (
    <HeaderContainer>
        <HeaderLeft>
            <HeaderAvater onClick={()=> signOut(auth)} src={user?.photoURL} alt={user?.displayName}/>
            <AccessTimeIcon/>
        </HeaderLeft>

        <HeaderSearch>
            <SearchIcon/>
            <input placeholder='Search'/>
        </HeaderSearch>

        <HeaderRight>
            <HelpOutlineIcon/>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;

const HeaderAvater = styled(Avatar)`
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`
const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    /* text-align: center; */
    display: flex;
    align-items: center;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    > input{
        background-color: transparent;
        border: none;
        outline: none;
        min-width: 30vw;
        text-align: center;
        color: white;
    }
`
const HeaderContainer = styled.div`
    display: flex;
    background-color: var(--slack-color);
    color: white;
    width: 100%;
    position: fixed;
    padding: 10px 0;
    justify-content: space-between;
`
const HeaderLeft = styled.div`
   flex: 0.3;
   display: flex;
   align-items: center;
   margin-left: 10px;

   > .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 10px;
   }
`
const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    
    >.MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 10px;
    }
`