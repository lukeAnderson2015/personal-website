import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-left: 1.5%;
  padding: 20px;
  color: white;
`;

export default function IntroBox(props) {
  return <Div>{props.children}</Div>;
}
