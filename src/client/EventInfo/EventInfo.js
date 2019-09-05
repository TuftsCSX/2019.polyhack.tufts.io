import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { Box, Heading } from 'rebass';
import { BackgroundImage } from 'react-landing-page';
import bg from '../GradientDraft2.svg';

export default function EventInfo(props) {
  return (
    <ParallaxLayer offset={0} image={bg}>

      <BackgroundImage image={bg} />

    </ParallaxLayer>
  );
}
