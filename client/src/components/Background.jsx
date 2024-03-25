import React from 'react'
import background from "../assets/background.jpg"
import styled from 'styled-components'

const Background = () => {
  return (
    <Container>
        <img src={background} alt="" />

      
    </Container>
  )
}

export default Background
const Container = styled.div`
height:100vh;
width:100vw;
img{
    height:100vh;
    width:100vw;
}
    
`
