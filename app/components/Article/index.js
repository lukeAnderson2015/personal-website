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
  width: 65vw;
  max-height: 80vh;
  color: white;
  padding: 0px 0px 10px 15px;
  border-radius: 5px;
`;

const Text = styled.div`
  padding-right: 10px;
  overflow-y: auto;
  max-height: 78vh;
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
