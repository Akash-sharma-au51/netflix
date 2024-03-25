import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Background />
      <div className="main-content">
        <div className="heading">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Starts at ₹149. Cancel anytime.</h4>
          <h6>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h6>
        </div>
        <div className="form">
          <input type="email" name="email" placeholder="Email Address" />
          <input type="password" name="password" placeholder="Password" />
          <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
            {props.login ? "Login" : "Signup"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  position: relative;
  .main-content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .heading {
    text-align: center;
    margin-bottom: 20px;
    color:white;
  }
  .form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
    width: 100%;
    max-width: 400px;
  }
  .form input {
    color: black;
    border: none;
    padding: 10px;
    font-size: 1.2rem;
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0.3);
    outline: none;
  }
   button {
    padding: 10px 20px;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 1.05rem;
  }
`;
