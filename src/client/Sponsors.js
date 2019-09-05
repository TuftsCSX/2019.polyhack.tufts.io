import React from 'react';
import { Flex, Box } from 'rebass';
import './Sponsor.css';

const platinum = [];
const gold = [];
const silver = [];


export const Platinum = () => (
  <Flex flexWrap="wrap" justifyContent="center" mx={-100} maxWidth={1000}>
    {platinum.map(({ id, file }) => (<Box pr="10px"><img className="SponsorImgPlatinum" alt={id} src={file} /></Box>))}
  </Flex>
);

export const Gold = () => (
  <Flex flexWrap="wrap" justifyContent="center" mx={-100} maxWidth={1000}>
    {gold.map(({ id, file }) => (<Box pr="10px"><img className="SponsorImgGold" alt={id} src={file} /></Box>))}
  </Flex>
);

export const Silver = () => (
  <Flex flexWrap="wrap" justifyContent="center" mx={-100} maxWidth={1000}>
    {silver.map(({ id, file }) => (<Box pr="10px"><img className="SponsorImgSilver" alt={id} src={file} /></Box>))}
  </Flex>
);
