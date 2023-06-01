import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;
const Right = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100vh;
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Bonjour ! Je suis Esther, une illustratrice fantastique passionnée. En tant qu'artiste freelance, 
        je donne vie à des personnages/mondes magiques et imaginaires à travers mes illustrations.
        <br />
        Mon style allie l'esthétique fantastique et une attention méticuleuse aux détails. Chaque création que je réalise est 
        le fruit d'une exploration des univers fantastiques, des créatures mystiques et des paysages enchanteurs. Je m'efforce de 
        capturer l'essence de l'extraordinaire et de l'insuffler dans mes illustrations, créant ainsi des pièces qui transportent 
        les spectateurs vers des royaumes imaginaires.
        <br />

        En travaillant avec moi, vous pouvez vous attendre à une collaboration étroite et à une communication fluide. J'attache une grande importance 
        à comprendre les besoins et les aspirations de mes clients, afin de traduire leurs idées en illustrations. Que vous soyez un auteur cherchant à 
        donner vie à vos personnages fantastiques, un éditeur en quête d'une couverture de livre captivante ou une entreprise souhaitant ajouter une touche 
        magique à votre branding, je suis prête à relever tous les défis créatifs qui se présentent.
    
        <br />
        N'hésitez pas à parcourir la page "Travaux", où vous pourrez découvrir un échantillon de ce que j'ai pu réaliser. Si vous êtes à la recherche d'illustrations 
        fantastiques uniques qui suscitent l'émerveillement et l'imagination, contactez-moi dès maintenant. Ensemble, nous donnerons vie à vos rêves les plus
        fantastiques !
      </Left>
      <Right>
        <img src={img1} alt="About Us" />
      </Right>
    </Section>
  );
};

export default About;
