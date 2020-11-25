/**
 *
 * IntroductionContainer
 *
 */

import React, { memo } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  height: 95vh;
  width: 100vw;

  @media screen and (min-width: 768px) {
    padding: 1em 2em 1em 2em;
    font-size: inherit;
    height: 85vh;
  }
`;

const RightPane = styled.div`
  padding-left: 3em;
  width: 65%;
`;

const LeftPane = styled.div`
  width: 20%;
  text-align: right;
  padding-right: 3em;
`;

const CenterLine = styled.div`
  height: 50vh;
  border-right: solid white 1px;
  border-radius: 5px;
`;

const IntroductionContainer = () => {
  return (
    <Container>
      <LeftPane>
        <p>Explorer</p>
        <br />
        <p>Developer</p>
        <br />
        <p>Creator</p>
      </LeftPane>
      <CenterLine />
      <RightPane>
        <p>In a totally unbiased manner, Washington is without question the best place on Earth (even with the rain).</p>
        <br />
        <p>I code for a living, but I'd prefer to be outside frolicking.</p>
        <br />
        <p>A dabble here. A paragraph there. I'll take photos anywhere.</p>
      </RightPane>
    </Container>
  );
}

export default memo(IntroductionContainer);
