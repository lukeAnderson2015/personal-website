/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import Img from 'components/Img';
import reactIcon from '../../images/icons8-react.svg';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  text-align: center;
  flex-wrap: wrap;
  border-top: white solid 1px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }

  p,
  a {
    margin: 3px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p>This project is licensed under the MIT license.</p>
        <a href="https://icons8.com" target="_blank">
          Icons By Icons8
        </a>
      </section>
      <section>
        <span>Built with love using </span>
        <a href="https://reactjs.org" target="_blank">
          React.js
          <Img src={reactIcon} alt="icon-unavilable" />
        </a>
      </section>
      <section>
        <p>
          Site Design, Implementation, Most* Photography and Writing by Lukas
          Anderson.
        </p>
        <p>
          Credit to Max Stoiber for the{' '}
          <a
            href="https://github.com/react-boilerplate/react-boilerplate"
            target="_blank"
          >
            React.js boilerplate project.
          </a>
        </p>
      </section>
    </Wrapper>
  );
}

export default memo(Footer);
