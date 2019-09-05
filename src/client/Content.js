/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import {
  useSpring, animated, config
} from 'react-spring';
import delay from 'delay';
import Navigation from './Navigation';
import Body from './Body';

import './content.css';

export const Content = () => {
  const [page, setPage] = useState('info');
  const fadeForeground = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      await delay(3500);
      await next({ opacity: 1 });
    },
    config: config.stiff
  });
  return (
    <Flex style={{
      height: '100vh', width: '100vw', zIndex: 1, position: 'absolute'
    }}
    >
      <a className="aMLH" href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-black.svg" alt="Major League Hacking 2020 Hackathon Season" style={{ width: '100%' }} /></a>
      <Box width={[1/8, 1/5]} />
      <Box width={[3/4, 3/5]} style={{ paddingTop: '10%' }}>
        <animated.div style={fadeForeground}>
          <Navigation page={page} setPage={setPage} />
          <div style={{ paddingTop: '5%' }}>
            <Body page={page} />
          </div>
        </animated.div>
      </Box>
      <Box width={[1/8]}/>
    </Flex>
  );
};
