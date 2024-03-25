import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const navigate = useNavigate()
  return (
    <Container>
      <Background />
      <div className="content">
        <div className="body flex column j-center-a-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
          </div>
          <div className="form">
            <input type="email" name="email" placeholder="Email address" />
            <input type="password" name="password" placeholder="Password" />
            <button type="button">Get Started</button>
          </div>
          <button onClick={()=>navigate(props.login?"/login":"/signup")}>{props.login?"Login":"SignUP"}</button>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
const Container = styled.div`
    position:relative;
    .content{
        position:absolute;
        top:0;
        left:0;
        background-color:rgba(0,0,0,0.5);
        color:white;
        height:100vh;
        width:100vw;
        display:grid;
        grid-template-rows:15vh 85vw
    }
    
    `;
