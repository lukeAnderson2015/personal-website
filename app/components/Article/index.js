/**
 *
 * Article
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ShortId from 'shortid';

const WrapperDiv = styled.div`
  width: 70vw;
  max-height: 84vh;
  color: white;
  padding: 10px 0px 10px 15px;
  border-radius: 5px;
  background-color: rgb(220, 220, 220, 0.3);
  margin-top: 10px;
`;

const Text = styled.div`
  padding-right: 10px;
  overflow-y: auto;
  height: 100%;
  text-indent: 40px;
`;

function Article(props) {
  const article = props.article || {};

  // account for \n newlines in text
  const formattedText = article.text
    .split('\n')
    .map(paragraph => <p key={ShortId.generate()}>{paragraph}</p>);

  return (
    <WrapperDiv>
      <Text>{formattedText}</Text>
    </WrapperDiv>
  );
}

Article.propTypes = {
  article: PropTypes.object,
};

export default memo(Article);
