import React, { Component } from 'react';
import { Flex } from 'rebass';
import { Content } from './Content';
import Logo from './Logo/logo';
import './app.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Content />        
        <Flex
          as="div"
          style={{
            height: '100%', width: '100%', position: 'absolute', zIndex: -1, maxWidth: '100%', overflow: 'hidden'
          }}
        >
          <Logo />
        </Flex>
      </React.Fragment>
    );
  }
}
