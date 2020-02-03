/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import linkedInIcon from '../../images/icons8-linkedin-64.png';
import Img from 'components/Img';
import cameraIcon from '../../images/icons8-camera-64.png';
import musicIcon from '../../images/icons8-music-64.png';
import homeIcon from '../../images/icons8-home-page-64.png';
import bookIcon from '../../images/icons8-open-book-64.png';

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 64px;
  width: 100vw;
`;

const NavBarWrapper = styled.div`
  width: 300px;
  margin-right: 35px;
  padding: 7px;
  display: flex;
  justify-content: space-between;
`;

const NavBarItem = styled.a`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
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
      <a
        href="https://www.linkedin.com/in/lukas-anderson-4a786b42"
        target="_blank"
        title="LinkedIn"
      >
        <Img src={linkedInIcon} alt="icon-unavailable" />
      </a>
      <NavBarWrapper>
        {buildNavItem(homeIcon, 'Home', 'home')}
        {buildNavItem(
          cameraIcon,
          'Travel & Photography',
          'travel-and-photography',
        )}
        {buildNavItem(bookIcon, 'Writing', 'writing')}
        {buildNavItem(musicIcon, 'Music', 'music')}
      </NavBarWrapper>
    </HeaderWrapper>
  );
}

export default memo(Header);
