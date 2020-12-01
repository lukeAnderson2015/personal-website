/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import Img from 'components/Img';
import reactIcon from '../../images/icons8-react.svg';
import { windowWidthThreshhold } from '../../utils/constants';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  text-align: center;
  flex-wrap: wrap;
  border-top: white solid 1px;

  @media screen and (min-width: ${windowWidthThreshhold}px) {
    flex-wrap: nowrap;
  }

  p,
  a {
    margin: 3px;
  }
`;

const IconCredits = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
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
        <IconCredits>
          <p>Icons By</p>
          <p>
            <a href="https://icons8.com" target="_blank">
              Icons8
            </a>
          </p>
          <p>&</p>
          <p>
            <a href="https://freeicons.io/" target="_blank">
              FreeIcons.io
            </a>
          </p>
        </IconCredits>
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
