import React from 'react'
import styled from 'styled-components';
import  Spinner  from 'react-spinkit';

const Loading = () => {
  return (
    <LoadingContainerTop>
        <LoadingContainer>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMK42lnN9df3LzKLjT1-u7nZnTB9SNIpXhw&usqp=CAU" alt="" /> */}
        <Spinner name="pacman" color="purple"/>
    </LoadingContainer>
    </LoadingContainerTop>
  )
}

export default Loading;

const LoadingContainerTop = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
`
const LoadingContainer = styled.div`
    text-align: center;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;

    >img{
        height: 100px;
        padding: 20px;
    }
`