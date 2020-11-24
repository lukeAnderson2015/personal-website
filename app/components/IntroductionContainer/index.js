/**
 *
 * IntroductionContainer
 *
 */

import React, { memo } from 'react';
import styled, { css } from 'styled-components';

const marginTop = css`
  margin-top: 10vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  font-size: 10px;

  @media screen and (min-width: 768px) {
    padding: 1em 2em 1em 2em;
    font-size: inherit;
  }
`;

const RightPane = styled.div`
  align-items: center;
  width: 55%;

  ${marginTop}
`;

const LeftPane = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 30%;

  ${marginTop}
`;

const CenterLine = styled.div`
  height: 65vh;
  border-right: solid white 1px;
  border-radius: 5px;

  ${marginTop}
`;

const Div = styled.div`
  width: 100%;
`;

const IntroductionContainer = () => {
  return (
    <Container>
      <LeftPane>
        <Div><h3> Lukas Axel Anderson </h3></Div>
        <Div><p>2/3/1994</p></Div>
      </LeftPane>
      <CenterLine />
      <RightPane>
        <Div><p>I was born and raised on an island near Seattle, Washington.</p></Div>
        <Div><p>In a totally unbiased manner, Washington is without question the best place on Earth.</p></Div>

      </RightPane>
    </Container>
  );
}

export default memo(IntroductionContainer);
