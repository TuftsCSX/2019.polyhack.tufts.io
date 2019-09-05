import React from 'react'
import {
    Hero, CallToAction, ScrollDownIndicator, Section
  } from 'react-landing-page'
import ResourceDetails from './ResourceDetails.js';
import FAQ from './FAQ.js';
import Sponsors from './Sponsors.js';
import { ParallaxLayer } from 'react-spring/renderprops-addons';


export default function Resources() {
    return (
        <React.Fragment>
                <ResourceDetails />
                <FAQ />
                <Sponsors />
        </React.Fragment>
    )
}
