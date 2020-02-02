import styled from 'styled-components';
import React from 'react';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;

  max-width: 100%;
  max-height: 100vh;
`;

export default function PanelSection(props) {
  return (
    <Section
      style={{
        ...props.style,
        backgroundImage: `url(${props.backgroundImage})`,
      }}
      id={props.id}
    >
      {props.children}
    </Section>
  );
}
