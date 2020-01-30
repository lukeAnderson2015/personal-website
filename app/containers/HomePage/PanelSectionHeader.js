import styled from 'styled-components';
import React from 'react';

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: grey;
  height: 100px;
  width: auto;
`;

export default function PanelSectionHeader(props) {
  return <Header style={{...props.style}}>
            <span>{props.text}</span>
          </Header>;
}
