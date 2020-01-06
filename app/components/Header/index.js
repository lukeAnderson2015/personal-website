import React from 'react';

import downloadIcon from '../../images/icons8-download-resume-40.png';
import Img from 'components/Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

function Header() {
  return (
      <NavBar>
        <div style={{fontSize: '28px', marginRight: 'auto'}}>Lukas Anderson</div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <HeaderLink to="/" style={{display: 'flex', alignItems: 'center'}}>
            <p>
              Writings
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
          <a href="/files/Resume_Lukas_Anderson.pdf" title="Download Resume" download style={{marginRight: '15px'}}>
            <Img src={downloadIcon} alt="icon-unavailable"/>
          </a>
        </div>
      </NavBar>
  );
}

export default Header;
