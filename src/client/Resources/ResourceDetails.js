import React, {useState} from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { useSpring, animated, config, useTrail } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import { Flex, Box, Button } from 'rebass';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import './ResourceDetailsStyles.css';


const items = ["Polyhack Schedule", "Venue Rules", "Mentor Help", "Slack", "Facebook Event"];

const Map = () => <GoogleMap/>;
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function ResourceDetails() {

    const [toggle, setToggle] = useState(false);
    const appearIn = useTrail(items.length, {config : config.slow, width : toggle ? "100%" : "0%", opacity : toggle ? 1 : 0 })
    const fade = useSpring({ opacity : toggle ? 1 : 0, y : toggle ? "%100" : "0%", config : config.slow });
    const layer2 = useSpring({ backgroundColor : toggle ? "#111" : "#000", config : config.slow});

    return (<React.Fragment>
                    <ParallaxLayer offset={2} speed={0.75} style={{backgroundColor : "#000"}}>
                        <Waypoint onEnter={() => setToggle(true)}>
                            <animated.h2 style={fade} className="resourceText">Resources</animated.h2>
                        </Waypoint>
                        {appearIn.map((styling, index) => <animated.div style={styling}><h2 className="resourceSubText"> {items[index]}</h2></animated.div>)}
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={1.25} style={{backgroundColor : "#000"}}>
                    <Flex>
                        <Box width={1/2} px={10}>
                            <h2 className="resourceText">Logistics</h2>
                            <h2 className="resourceSubText2">6 PM, Oct 11th to 12th, 2019</h2>
                            <h2 className="resourceSubText2">Tufts University</h2>
                            <h2 className="resourceSubText2">574 Boston Avenue Medford, MA 02155</h2>
                            <Button variant="primary" sx="Button">Register Now!</Button>
                        </Box>
                        <Box width={1/3} px={2}>
                            <div style={{ width: "100%", height: "120%" }}>
                                <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCJuTxrQxn4qDoAF_khz_XI-SFdJUbXF1c`}
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `100%` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}/>
                            </div>
                        </Box>
                        <Box width={1/6} px={20}>
                            <div></div>
                        </Box>
                    </Flex>
                    </ParallaxLayer>
            </React.Fragment>);
}
