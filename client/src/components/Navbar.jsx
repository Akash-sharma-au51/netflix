import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'


const Navbar = (props) => {
    const navigate = useNavigate()
  return (
    <Container>
        <div className='logo'>
            <img src={logo} alt="logo"  />
        <button onClick={()=>navigate(props.login?"/login":"/signup")}>{props.login ? "login":"signin"}</button>
        </div>


        
      
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    padding:0.4rem;
    .logo{
        display:flex
       }
       img{
        height:5rem;

       }
       button{
        padding:0.4rem;
        background-color: #e50914;
        color:white;
        cursor:pointer;
        border-radius:1px;
        font-weight:bolder;
        font-size:1.05rem;


        
       }
    

`
