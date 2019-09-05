import React, { useState } from 'react';
import {
  Text, Box, Flex, Button
} from 'rebass';
import {
  useSpring, animated, config
} from 'react-spring';
import delay from 'delay';
import windowSize from 'react-window-size';
import { Platinum, Gold, Silver } from './Sponsors';

function isMobile(props) {
  const xTransform = props.windowWidth;
  return (xTransform < 600);
}

const getInfoContent = (animations, props) => (
  <animated.div className={isMobile(props) ? 'mobileInfoClass' : 'desktopInfoClass'} style={animations.fadeInInfo}>
    <Text className="Register"> 
      {' '}
      <animated.span style={{ color: '#666' }}> &#60; </animated.span>
      {' '}
      <a href="https://forms.gle/ozpZkRW3nMYVoDaY7"><animated.span style={animations.register}>Register </animated.span></a>
      {' '}
      <animated.span style={{ color: '#666' }}> /&#62;</animated.span>
    </Text>
    <Text fontSize={[3, 4, 5]} className="Dates">October 11-12, 2019 </Text>
    <Text fontSize={[3, 4, 5]} className="Location">
      {' '}

Tufts University: 574 Boston Ave.
      {' '}
      <span role="img">🧭</span>
    </Text>
  </animated.div>
);

const getAboutContent = animations => (
  <animated.div style={animations.fadeInAbout}>
    <Text fontSize={[4, 5, 6]} className="MissionHeader">Our Mission</Text>
    <animated.div style={animations.missionBar} className="MissionHeaderDot" />
    <Flex>
      <Box maxWidth={[400, 600, 900]}>
        <Text fontSize={[3, 4, 5]} className="MissionBody">
          <Box as="span"> &nbsp; </Box>

To
          {' '}
          <animated.span style={animations.empower}> empower</animated.span>

,
          {' '}
          <animated.span style={animations.encourage}>encourage</animated.span>
          {' '}

and
          {' '}
          <animated.span style={animations.engage}>engage</animated.span>
          {' '}

students to solve problems at any scale using the knowledge
           and skills they’ve acquired through the university and beyond.
             To bring together students from many disciplines under the umbrella of tech
              in a collaborative environment.
        </Text>
      </Box>
    </Flex>
  </animated.div>
);

const getFAQContent = (animations, props) => {
  let boxProps = { px: 2, py: 2 };
  if (isMobile(props)) {
    boxProps = { width: 3 / 4, ...boxProps };
  } else {
    boxProps = { width: 1 / 3, ...boxProps };
  } return (
    <animated.div style={animations.fadeInFAQ}>
      <Flex className={isMobile(props) ? 'mobileFAQClass' : 'desktopFAQClass'} mx={-100} maxWidth={1000} paddingTop={25}>
        <Box  {...boxProps}>
          <Text style={((isMobile(props)) ? { paddingLeft: '100px'} : { width: 'auto'})} className="FAQ1">Can I Attend?</Text>
          <Text style={((isMobile(props)) ? { width: '300px', height: '400px', paddingLeft: '100px'} : { width: 'auto'})}>
          {' '}
All members of the Tufts Community (and friends) are invited.
      Polyhack is not a traditional hackathon—we want to cross borders with
      other disciplines of thought and learn from one another. If you aren't a
      member of the Tufts community, you must be explicitly invited.
          </Text>
        </Box>
        <Box {...boxProps}>
          <Text className="FAQ1">What should I bring?</Text>
          <Text style={((isMobile(props)) ? { width: '250px', height: '400px'} : { width: 'auto'})}>

Bring a valid student ID for admission and a laptop for hacking
          and/or designing something together. We’ll be providing pretty much everything
          elsestickers, snacks, and more!
          </Text>
        </Box>
        <Box {...boxProps}>
          <Text className="FAQ1"> I've Never Been to A Hackathon</Text>
          <Text style={((isMobile(props)) ? { width: '250px', height: '400px' } : { width: 'auto'})}>Tufts Polyhack is specifically designed to accommodate all levels. If you've never been to a hackathon, or are just getting stared coding don't fear! We will be holding info sessions, team-finding events, and even assign experienced mentors to lead your team.</Text>
        </Box>
        <Box {...boxProps}>
          <Text className="FAQ2">How do teams work?</Text>
          <Text style={((isMobile(props)) ? { width: '250px', height: '400px' } : { width: 'auto'})}> Hackathons are more fun when you work with others, so we encourage people to form teams beforehand or find teams at the event. Teams are capped at 5 people. Your team can be larger, but smaller teams will take precedence and we'll only guarantee prizes for up to 5 people.</Text>
        </Box>
        <Box {...boxProps}>
          <Text className="FAQ2">What if I don’t have a team?</Text>
          <Text style={((isMobile(props)) ? { width: '250px', height: '400px' } : { width: 'auto'})}>Polyhack is about meeting new people, and in that spirit, we'll have group formation events towards the beginning of the hackathon. We also have a mentorship program that'll assign experienced mentors to lead your team.</Text>
        </Box>
        <Box {...boxProps}>
          <Text tyle={((isMobile(props)) ? { paddinRight: '100px' } : { width: 'auto' })} className="FAQ2">What if this FAQ didn’t answer my questions?</Text>
          <Text style={((isMobile(props)) ? { width: '250px', height: '400px' } : { width: 'auto'})}> Don't hesitate to email us at team@tufts.io and we'll do our best to answer any questions and concerns you might have.</Text>
        </Box>
        { isMobile(props) && <Box {...boxProps}>
          <Text style={((isMobile(props)) ? { paddinRight: '50px'} : { width: 'auto'})} className="FAQ2"></Text>
          <Text style={((isMobile(props)) ? { width: '50px', height: '400px'} : { width: 'auto'})}></Text>
    </Box> }
      </Flex>
    </animated.div>
  );
}
const getSponsorsContent = animations => (
  <React.Fragment>
    <Text className="Sponsors"> Thank you to our 2019 Sponsors!</Text>
    <Platinum />
    <Gold />
    <Silver />
  </React.Fragment>
);

const getMentorsContent = animations => (
  <React.Fragment>
    <Text fontSize={[5, 6, 7]} className="Mentors"> Aspire to be a Mentor? </Text>
    <Flex>
      <Box maxWidth={900}>
        <Text fontSize={[3, 4, 5]} className="MissionBody">
          <span style={{ paddingRight: '250px' }} />

          Mentors not only assist in helping teams accomplish their projects,
          but also provide guidance when they are in need of help. Mentorship 
          ensures that Polyhack is a rich and rewarding experience for all 
          participants. 
          <Flex justifyContent="center"><a href="https://forms.gle/NMoSMk47ChJKJ9iJ9"><Button bg="black">Apply Now!</Button></a></Flex>
        </Text>
      </Box>
    </Flex>
  </React.Fragment>
);

const contentActions = (page, animations, props) => {
  switch (page) {
    case 'info': return getInfoContent(animations, props);
    case 'about': return getAboutContent(animations);
    case 'faq': return getFAQContent(animations, props);
    case 'sponsors': return getSponsorsContent(animations);
    case 'mentors': return getMentorsContent(animations);
    default: return getInfoContent(animations);
  }
};

function Body(props) {
  const { page } = props;
  const fadeInAbout = useSpring({
    from: {
      opacity: 0
    },
    to: (page === 'about' ? { opacity: 1 } : { opacity: 0 }),
    config: config.stiff
  });
  const fadeInFAQ = useSpring({
    from: {
      opacity: 0
    },
    to: (page === 'faq' ? { opacity: 1 } : { opacity: 0 }),
    config: config.stiff
  });
  const fadeInInfo = useSpring({
    from: {
      opacity: 0
    },
    to: (page === 'info' ? { opacity: 1 } : { opacity: 0 }),
    config: config.stiff
  });
  const empower = useSpring({
    from: {
      background: 'linear-gradient(to right, #fff 100%, #fff 0%)', backgroundPosition: 'bottom', backgroundSize: '100% 3px', backgroundRepeat: 'no-repeat'
    },
    to: (page === 'about' ? (async (next) => {
      await delay(500);
      await next({ background: 'linear-gradient(to right, #D4582C; 100%, #000 100%)' });
      await next({ backgroundSize: '100% 5px' });
    }) : {
      background: 'linear-gradient(to right, #fff 100%, #fff 0%)', backgroundPosition: 'bottom', backgroundSize: '100% 3px', backgroundRepeat: 'no-repeat'
    }),
    config: config.stiff
  });
  const encourage = useSpring({
    from: {
      background: 'linear-gradient(to right, #fff 100%, #fff 0%)', backgroundPosition: 'bottom', backgroundSize: '100% 3px', backgroundRepeat: 'no-repeat'
    },
    to: (page === 'about' ? (async (next) => {
      await delay(750);
      await next({ background: 'linear-gradient(to right, #37A08D; 100%, #000 100%)' });
      await next({ backgroundSize: '100% 5px' });
    }) : {
      background: 'linear-gradient(to right, #fff 100%, #fff 0%)', backgroundPosition: 'bottom', backgroundSize: '100% 3px', backgroundRepeat: 'no-repeat'
    }),
    config: config.stiff
  });
  const engage = useSpring({
    from: {
      background: 'linear-gradient(to right, #fff 100%, #fff 0%)', backgroundPosition: 'bottom', backgroundSize: '100% 3px', backgroundRepeat: 'no-repeat'
    },
    to: (page === 'about' ? (async (next) => {
      await delay(1000);
      await next({ background: 'linear-gradient(to right, #942459; 100%, #000 100%)' });
      await next({ backgroundSize: '100% 5px' });
    }) : {
      background: 'linear-gradient(to right, #fff 100%, #fff 0%)', backgroundPosition: 'bottom', backgroundSize: '100% 3px', backgroundRepeat: 'no-repeat'
    }),
    config: config.stiff
  });

  const missionBar = useSpring({
    from: { width: '0px' },
    to: (page === 'about' ? (async (next) => {
      await delay(250);
      await next({ width: '250px' });
    }) : { width: '0px' }),
    config: config.stiff
  });

  const leftRegister = useSpring({
    from: {
      color: '#37A08D', background: '#FFF', transform: 'rotateY(0deg)', display: 'inline-block'
    },
    to: (page === 'info' ? (async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ color: '#666', background: '#FFF', transform: 'rotateY(180deg)' });
        await delay(500);
        await next({ color: '#37A08D', background: '#FFF', transform: 'rotateY(0deg)' });
      }
    }) : { color: '#37A08D', background: '#FFF', borderRadius: '0px 0px 0px 0px' }),
    config: config.molasses
  });

  const register = useSpring({
    from: { color: '#37A08D', background: '#F8F8FF', },
    to: (page === 'info' ? (async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ color: '#37A08D', background: '#F8F8FF' });
        await delay(500);
        await next({ color: '#D4582C', background: '#F8F8FF' });
      }
    }) : { color: '#37A08D', background: '#F8F8FF', borderRadius: '0px 0px 0px 0px' }),
    config: config.molasses
  });

  const registerRight = useSpring({
    from: { color: '#37A08D', background: '#FFF', opacity: 0 },
    to: (page === 'info' ? (async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ color: '#37A08D', background: '#FFF', opacity: 0 });
        await delay(300);
        await next({ color: '#666', background: '#FFF', opacity: 1 });
        await delay(200);
      }
    }) : { color: '#37A08D', background: '#FFF', borderRadius: '0px 0px 0px 0px' }),
    config: config.molasses
  });

  const animations = {
    fadeInAbout, fadeInFAQ, fadeInInfo, empower, encourage, engage, missionBar, leftRegister, register, registerRight
  };
  const content = contentActions(page, animations, props);
  return content;
}

export default windowSize(Body);
