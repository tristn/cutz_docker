import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/booking.svg';
import Icon3 from '../../images/reward.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Tailored Experience</ServicesH2>
            <ServicesP>
              Book with your favorite barber that has experience with your hair.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Book Online</ServicesH2>
            <ServicesP>
              Booking online makes getting an appointment easier than ever!
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              We value our regular customers, and use a REWARDS system to show
              our appreciation.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
