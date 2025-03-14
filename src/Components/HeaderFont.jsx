import styled from "styled-components";

const HeaderFont = ({ text, fontsize }) => {
  return (
    <StyledWrapper>
      <div className="glitch-container">
        {/* We are Dedsec */}
        {text}
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .glitch-container {
    position: relative;
    font-family: "Orbitron", sans-serif;
    font-size: 18px; /* Mobile size */
    @media (min-width: 768px) {
      font-size: 36px; /* Desktop size */
    }
    font-weight: 900;
    text-transform: uppercase;
    color: #00ffff;
    text-shadow: 0.05em 0 0 #ff00ff, -0.03em -0.04em 0 #ffff00,
      0.025em 0.04em 0 #00ffff;
    animation: glitch 725ms infinite;
  }

  .glitch-container span {
    position: absolute;
    top: 0;
    left: 0;
  }

  .glitch-container span:first-child {
    animation: glitch 500ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    transform: translate(-0.04em, -0.03em);
    opacity: 0.75;
  }

  .glitch-container span:last-child {
    animation: glitch 375ms infinite;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translate(0.04em, 0.03em);
    opacity: 0.75;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 #ff00ff, -0.03em -0.04em 0 #ffff00,
        0.025em 0.04em 0 #00ffff;
    }
    15% {
      text-shadow: 0.05em 0 0 #ff00ff, -0.03em -0.04em 0 #ffff00,
        0.025em 0.04em 0 #00ffff;
    }
    16% {
      text-shadow: -0.05em -0.025em 0 #ff00ff, 0.025em 0.035em 0 #ffff00,
        -0.05em -0.05em 0 #00ffff;
    }
    49% {
      text-shadow: -0.05em -0.025em 0 #ff00ff, 0.025em 0.035em 0 #ffff00,
        -0.05em -0.05em 0 #00ffff;
    }
    50% {
      text-shadow: 0.05em 0.035em 0 #ff00ff, 0.03em 0 0 #ffff00,
        0 -0.04em 0 #00ffff;
    }
    99% {
      text-shadow: 0.05em 0.035em 0 #ff00ff, 0.03em 0 0 #ffff00,
        0 -0.04em 0 #00ffff;
    }
    100% {
      text-shadow: -0.05em 0 0 #ff00ff, -0.025em -0.04em 0 #ffff00,
        -0.04em -0.025em 0 #00ffff;
    }
  }
`;

export default HeaderFont;
