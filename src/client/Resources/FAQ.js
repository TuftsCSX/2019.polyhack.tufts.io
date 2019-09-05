import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import './FAQStyles.css'

export default function FAQ() {
    return (
        <ParallaxLayer offset={3.5} speed={0.5}>
            <Flex flexWrap='wrap'>
                <Box width={1} px={2} py={5}>
                   <Text className="FAQHeader">FAQ</Text>
                </Box>
                <Box width={1/3} pl={6} py={2}>
                    <Text py={2} className="FAQSubHeader">Can I attend?</Text>
                    <Text className="FAQBody"> All members of the Tufts Community (and friends) are invited. Polyhack is not a traditional hackathon—we want to cross borders with other disciplines of thought and learn from one another. If you aren't a member of the Tufts community, you must be explicitly invited.</Text>
                </Box>
                <Box width={1/3} px={4} py={2}>
                    <Text py={2} className="FAQSubHeader">What should I bring?</Text>
                    <Text className="FAQBody">Bring a valid student ID for admission and a laptop for hacking and/or designing something together. We’ll be providing pretty much everything elsestickers, snacks, and more!</Text>
                </Box>
                <Box width={1/3} pr={6} py={2}>
                    <Text py={2} className="FAQSubHeader">What if I've never been to a hackathon?</Text>
                    <Text className="FAQBody">Tufts Polyhack is specifically designed to accommodate all levels. If you've never been to a hackathon, or are just getting stared coding don't fear! We will be holding info sessions, team-finding events, and even assign experienced mentors to lead your team.</Text>
                </Box>
                <Box width={1/3} pl={6} py={2}>
                    <Text py={2} className="FAQSubHeader">How do teams work?</Text>
                    <Text className="FAQBody">Hackathons are more fun when you work with others, so we encourage people to form teams beforehand or find teams at the event. Teams are capped at 5 people. Your team can be larger, but smaller teams will take precedence and we'll only guarantee prizes for up to 5 people.</Text>
                </Box>
                <Box width={1/3} px={4} py={2}>
                    <Text py={2} className="FAQSubHeader">What if I don’t have a team?</Text>
                    <Text className="FAQBody"> Polyhack is about meeting new people, and in that spirit, we'll have group formation events towards the beginning of the hackathon. We also have a mentorship program that'll assign experienced mentors to lead your team.</Text>
                </Box>
                <Box width={1/3} pr={6} py={2}>
                    <Text py={2} className="FAQSubHeader">What if this FAQ didn’t answer my questions?</Text>
                    <Text className="FAQBody">Don't hesitate to email us at team@tufts.io and we'll do our best to answer any questions and concerns you might have.</Text>
                </Box>
            </Flex>
        </ParallaxLayer>
    )
}
