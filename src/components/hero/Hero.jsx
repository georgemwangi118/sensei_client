import React, { useState } from "react";
import Video from "../../video/vid1.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Arrow,
  ArrowRight,
} from "./styles";
import "./hero.scss";
import { Button } from "../ButtonElement";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Book your next</HeroH1>
        <HeroH1>healthcare appointment</HeroH1>
        <HeroP>
          Find, book and add your favorite practitioners to your care team.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="login"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <Arrow /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        <div className="bordered-div">
          <div className="wrapper-div">
            <p>Are you a GP, dentist, specialist or allied health provider? </p>
            <Button
              to="list"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="tru"
              dark="true"
            >
              List your practice here
            </Button>
          </div>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
