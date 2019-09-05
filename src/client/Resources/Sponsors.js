import React from 'react'
import { Flex, Box, Text, Image } from 'rebass';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import './SponsorStyles.css';

const sponsorList = [{sponsorId : "TripAdvisor", imgSrc : "./SponsorSvgs/tripadvisor.png", sponsorshipTier : "Gold"},
                     {sponsorId : "TripAdvisor", imgSrc : "./SponsorSvgs/tripadvisor.png", sponsorshipTier : "Gold"},
                     {sponsorId : "TripAdvisor", imgSrc : "./SponsorSvgs/tripadvisor.png", sponsorshipTier : "Gold"},
                     {sponsorId : "TripAdvisor", imgSrc : "./SponsorSvgs/tripadvisor.png", sponsorshipTier : "Platinum"},
                     {sponsorId : "TripAdvisor", imgSrc : "./SponsorSvgs/tripadvisor.png", sponsorshipTier : "Gold"}]


export default function Sponsors() {


    const planitnumSponsors = sponsorList.filter(({sponsorshipTier}) => sponsorshipTier === "Platinum");
    const planitnumSponsorElements = planitnumSponsors.map(({sponsorId, imgSrc}, index) => {
                                                    return(
                                                    <React.Fragment>
                                                        <Box width={1/4}></Box>
                                                        <Image
                                                        key={sponsorId}
                                                        src={imgSrc}
                                                        width={1/2}
                                                        />
                                                        <Box width={1/4}></Box>
                                                    </React.Fragment>);
                                                });

    const goldSponsors = sponsorList.filter(({sponsorshipTier}) => sponsorshipTier === "Gold");
    const goldSponsorElements = goldSponsors.map(({sponsorId, imgSrc}, index) => {
                                            if (goldSponsors.length % 3 === 2) {
                                                if(goldSponsors.length - index === 2){
                                                    return(
                                                        <React.Fragment>
                                                        <Image
                                                        key={sponsorId}
                                                        src={imgSrc}
                                                        width={1/3}
                                                        />
                                                        <Box width={1/6}>b</Box>
                                                    </React.Fragment>)}
                                                else if(goldSponsors.length - index === 1){
                                                    return(
                                                        <React.Fragment>
                                                        <Box width={1/6}>a</Box>
                                                        <Image
                                                        key={sponsorId}
                                                        src={imgSrc}
                                                        width={1/3}
                                                        />
                                                        </React.Fragment>);
                                                }
                                                
                                            }
                                            if (goldSponsors.length % 3 === 1 && goldSponsors.length - index === 1){
                                                return(
                                                    <React.Fragment>
                                                        <Box width={1/3}></Box>
                                                        <Image
                                                        key={sponsorId}
                                                        src={imgSrc}
                                                        width={1/3}
                                                        />
                                                        <Box width={1/3}></Box>
                                                    </React.Fragment>
                                                )
                                            }
                                            return(<Image
                                            key={sponsorId}
                                            src={imgSrc}
                                            width={1/3}
                                            />)
                                            }).reverse();

    return (
        <ParallaxLayer offset={4}>
        <Flex flexWrap='wrap'>
            <Text width={1} className="sponsorHeader">2019 Sponsors</Text>
            {planitnumSponsorElements}
            {goldSponsorElements}
        </Flex>
        </ParallaxLayer>
    )
}
