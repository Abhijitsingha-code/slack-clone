import React from 'react'
import styled from 'styled-components';
import {db} from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';

const SidebarOptions = ({title,Icon,addChannelOption,id}) => {

    const dispatch = useDispatch()
    const channelRef = collection(db, 'rooms');
    const addChannel = () =>{
       const channelName = prompt('Enter the Channel name .');

       if(channelName){
        addDoc(channelRef,{
            name : channelName,
        })
       }
    }

    const selectChannel =() =>{
       if (id){
            dispatch(enterRoom({
                roomId:id,
            }))
       }
    }

  return (
    <SidebarOptionsContainer onClick={ addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon fontSize='small' style={{padding:10}}/>}
        {
            Icon ? (<h3>{title}</h3>) :
            (
                <SiderbarOptionChannel>
                    <span>#</span>{title}
                </SiderbarOptionChannel>
            )
        }
    </SidebarOptionsContainer>
  )
}

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
    display: flex;
    font-size: 13px;
    align-items: center;
    cursor: pointer;
    /* padding-left: 2px; */

    :hover{
        opacity: 0.8;
        background-color: #340e36;
    }

    >h3{
        font-weight: 500;
    }
    
`;
const SiderbarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;

    > span{
        padding: 15px;
    }
`;