/**
 *
 * Introduction
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { windowWidthThreshhold } from '../../utils/constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 95vh;
  width: 100vw;

  @media screen and (min-width: ${windowWidthThreshhold}px) {
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
  text-align: right;
  padding-right: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 55vh;

  @media screen and (min-width: ${windowWidthThreshhold}px) {
    display: block;
    padding-right: 3em;
    height: auto;
    width: 20%;
  }
`;

const CenterLine = styled.div`
  height: 50vh;
  border-right: solid white 1px;
  border-radius: 5px;
`;

const Introduction = () => {
  return (
    <Wrapper>
      <LeftPane>
        <p>Creator</p>
        <br />
        <p>Explorer</p>
        <br />
        <p>Developer</p>
      </LeftPane>
      <CenterLine />
      <RightPane>
        <p className="smallMargin">A new sound here. A paragraph there. I'll take photos anywhere.</p>
        <br />
        <p className="smallMargin">In a totally unbiased manner, Washington is without question the best place on Earth (even with the rain).</p>
        <br />
        <p className="smallMargin">I code for a living, but I'd prefer to be outside frolicking.</p>
      </RightPane>
    </Wrapper>
  );
}

export default memo(Introduction);
