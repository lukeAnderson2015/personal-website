/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import Img from 'components/Img';

import linkedInIcon from '../../images/linkedInIcon.svg';
import cameraIcon from '../../images/cameraIcon.svg';
import homeIcon from '../../images/homeIcon.svg';
import bookIcon from '../../images/bookIcon.svg';
import profileIcon from '../../images/profileIcon.svg';

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;

  height: 6em;
  width: 100%;
  padding: 1em;

  @media screen and (min-width: 768px) {
    padding: 1em 2em 1em 2em;
  }
`;

const NavBarItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: solid white 1px;
  border-radius: 5px;
  min-width: 4em;
`;

const NavBarItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.35em 0 0.35em;

  @media screen and (min-width: 768px) {
    margin: 0 1em 0 1em;
  }

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
        {buildNavItem(profileIcon, 'Introduction', 'introduction')}
        {buildNavItem(cameraIcon, 'Photography', 'photography')}
        {buildNavItem(bookIcon, 'Writing', 'writing')}
        {/* {buildNavItem(musicIcon, 'Music', 'music')} */}
      </NavBarItemWrapper>
    </HeaderWrapper>
  );
}

export default memo(Header);
