/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import Img from 'components/Img';

import linkedInIcon from '../../images/icons8-linkedin-white-50.png';
import cameraIcon from '../../images/icons8-camera-white-50.png';
import homeIcon from '../../images/icons8-home-white-50.png';
import bookIcon from '../../images/icons8-open-book-white-50.png';

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;

  height: 6em;
  width: 100%;
  padding: 1em 2em 1em 2em;
`;

const NavBarItemWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border: solid white 1px;
  border-radius: 5px;

  padding: .25em;
`;

const NavBarItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 1em 0 1em;
  
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;

function buildNavItem(icon, title, id) {
  return (
    <NavBarItem href={`#${id}`} title={`Go to ${title}`}>
      <Img src={icon} alt="icon-unavailable" />
    </NavBarItem>
  );
}

function Header() {
  return (
    <HeaderWrapper>
      <NavBarItemWrapper>
        <a
          href="https://www.linkedin.com/in/lukas-anderson-4a786b42"
          target="_blank"
          title="LinkedIn - Lukas Anderson"
        >
          <Img src={linkedInIcon} alt="icon-unavailable" />
        </a>
      </NavBarItemWrapper>
      <NavBarItemWrapper>
        {buildNavItem(homeIcon, 'Home', 'home')}
        {buildNavItem(
          cameraIcon,
          'Travel & Photography',
          'travel-and-photography',
        )}
        {buildNavItem(bookIcon, 'Writing', 'writing')}
        {/* {buildNavItem(musicIcon, 'Music', 'music')} */}
      </NavBarItemWrapper>
    </HeaderWrapper>
  );
}

export default memo(Header);
