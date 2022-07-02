import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Btn,
  BtnLink
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Cheap Haircuts</HeroH1>
        <HeroP>
          Nappy hair? Need a confidence boost? Book an appointment today with
          our professional barbers.
        </HeroP>
        <HeroBtnWrapper>
          <Btn>
            <BtnLink to="/book">Book Now</BtnLink>
          </Btn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
