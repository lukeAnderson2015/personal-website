import React from 'react';

import {CircularImg} from 'components/Header/CircularImg';
import downloadIcon from '../../images/icons8-download-resume-40.png';
import Img from 'components/Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import diving_selfie from '../../images/diving_selfie.jpg';

function Header() {
  return (
      <NavBar>
        <CircularImg style={{marginTop: '150px'}} src={diving_selfie} alt="no-image-found" />
        <div style={{fontSize: '28px', marginRight: 'auto'}}>Lukas Anderson</div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <HeaderLink to="/" style={{display: 'flex', alignItems: 'center'}}>
            <p>
              Home
            </p>  
          </HeaderLink>
          <HeaderLink to="/travels" style={{display: 'flex', alignItems: 'center'}}>
            <p>
              Travels
            </p>
          </HeaderLink>
          <HeaderLink to="/about" style={{display: 'flex', alignItems: 'center'}}>
            <p>
              About
            </p>
          </HeaderLink>
          <a href="/files/Lukas_Anderson_resume.pdf" download style={{marginRight: '15px'}}>
            <Img src={downloadIcon} alt="icon-unavailable"/>
          </a>
        </div>
      </NavBar>
  );
}

export default Header;
