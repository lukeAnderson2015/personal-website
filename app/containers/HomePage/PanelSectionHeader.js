import styled from 'styled-components';
import React from 'react';

const Header = styled.h1`
  position: absolute;
  align-self: flex-start;
  background-color: white;
  color: black;
  opacity: 70%;
  border-radius: 5px;
  padding: 10px;
`;

export default function PanelSectionHeader(props) {
  return <Header>{props.text}</Header>;
}
