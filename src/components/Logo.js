import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2, // 2
      delay: 5,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      delay: 3,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="1917.333" height="516" version="1.0" viewBox="0 0 1438 387"><path d="M688.3 68.5c-3.7 3.8-3.5 5.3.7 7.9 3.8 2.2 3.8 3.6.1 3.6-3.3 0-6.7 3.6-11.4 12l-2.8 5h44.3l-3.2-4c-4.6-5.9-10.7-10.7-15.3-12.3-3.8-1.2-4.2-1.7-6.4-8.2-1.2-3.7-2.4-6.9-2.5-7.1-.2-.1-1.8 1.3-3.5 3.1z"/></svg>
        <Text variants={textVariants} initial="hidden" animate="visible">
          EowlArt
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
