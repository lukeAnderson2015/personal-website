import React from 'react';
import styled from 'styled-components';

import linkedInIcon from '../../images/icons8-linkedin-64.png';
import Img from 'components/Img';

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;

    height: 64px;
    width: 100vw
`;

const NavBarWrapper = styled.div`
    display: flex;
    width: 20vw;
    background: linear-gradient(180deg, rgb(26, 109, 255), rgb(200, 34, 255));
    border-radius: 10px;

`;

const NavBarItem = styled.a`
    height: 50px;
    border-radius: 10px;
    border: solid black 1px;

`;

export default class FixedOverlay extends React.Component {

    render() {
        return (
            <Wrapper>
                <a href="https://www.linkedin.com/in/lukas-anderson-4a786b42" target="_blank" title="LinkedIn">
                    <Img src={linkedInIcon} alt="icon-unavailable"/>
                </a>
                <NavBarWrapper>
                    <NavBarItem><p>Travel & Photography</p></NavBarItem>
                    <NavBarItem><p>Writing</p></NavBarItem>
                </NavBarWrapper>
            </Wrapper>
        );
    }
}