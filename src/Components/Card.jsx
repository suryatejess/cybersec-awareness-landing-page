import React from "react";
import styled from "styled-components";

const Card = ({ text }) => {
  return (
    <StyledWrapper>
      <div className="card mt-5 mb-5" id="card">
        <div className="content">
          <span>{text}</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    background: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 3px 1px #00000088;
    cursor: pointer;
  }

  .card .content {
    border-radius: 5px;
    background: #171717;
    width: 186px;
    height: 250px;
    z-index: 1;
    padding: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content::before {
    opacity: 1;
    transition: opacity 300ms;
    content: " ";
    display: block;
    background: white;
    width: 5px;
    height: 50px;
    position: absolute;
    filter: blur(50px);
    overflow: hidden;
  }

  .card::before {
    opacity: 1;
    content: " ";
    position: absolute;
    display: block;
    width: 80px;
    height: 360px;
    background: linear-gradient(#ff2288, #387ef0);
    transition: opacity 300ms;
    animation: rotation_9018 8000ms infinite linear;
    animation-play-state: running;
  }

  .card::after {
    position: absolute;
    content: " ";
    display: block;
    width: 250px;
    height: 360px;
    background: #17171733;
    backdrop-filter: blur(50px);
  }

  @keyframes rotation_9018 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Card;
