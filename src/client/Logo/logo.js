/* eslint-disable no-tabs */
import React from 'react';
import windowSize from 'react-window-size';
import { Box, Flex } from 'rebass';
import {
  useSpring, animated, config
} from 'react-spring';
import delay from 'delay';
import logo from '../img/croppedLogo.svg';
import logoText from '../img/polyhackText.svg';

import './style.css';

const getXTranslation = (xWidth) => {
  const x = parseInt(xWidth)
  if(x < 600) {
    return '0, 400';
  } if(x >= 600 && x < 1000){
    return '-400, 50';
  } if(x >= 1000 && x < 1400){
    return '-550, 50';
  } if(x >= 1400){
    return '-700, 50';
  } 
    return '-1000, 1000';
  
};
const getScaling = (xWidth) => {
  const x = parseInt(xWidth);
  if (x < 600) {
    return '1.5';
  }
  return '3';
};

const isMobile = (xWidth) => {
  const x = parseInt(xWidth);
  if (x < 600) {
    return true;
  }
  return false;
};

export function Logo(props) {
  const xTransform = getXTranslation(props.windowWidth);
  const scaling = getScaling(props.windowWidth);

  const fadeBackground = useSpring({
    from: { background: '#000', width: '100%' },
    to: async (next) => {
      await delay(2000);
      await next({ background: '#F8F8FF' });
    },
    config: config.stiff
  });
  const startAnimation = useSpring({
    from: { opacity: 0, transform: `rotate(0deg) translate3d(0%,0%,0px) scale(${scaling})`, transformOrigin: '50% 50%' },
    to: async (next) => {
      await next({ opacity: 1 });
      await delay(1000);
      await next({ transform: 'rotate(360) translate3d(0,0,0px) scale(0)', config: config.default });
      await next({ transform: 'rotate(0) translate3d(-1000,50,0px) scale(0)', config: config.stiff });
      await next({ transform: `rotate(0) translate3d(${xTransform},0px) scale(5)` });
    },
    config: config.stiff,
  });
  const fadeText = useSpring({
    from: { opacity: 1 },
    to: async (next) => {
      await delay(2000);
      await next({ opacity: 0 });
    },
  });

  const logoTextClass = isMobile(props.windowWidth) ? "MobileLogoTextClass" : "DesktopLogoTextClass"; 
  return (
    <animated.div className="logoContainer" style={fadeBackground}>
      <Box width={[1]} style={{ paddingTop: '300px' }} />
      <Box width={[1]}>
        <Flex justifyContent="center">
          <Box>
            <animated.img className="logo" style={startAnimation} src={logo} />
            <animated.img src={logoText} style={fadeText} className={logoTextClass} />
          </Box>
        </Flex>
      </Box>
    </animated.div>
  );
}

export default windowSize(Logo);
