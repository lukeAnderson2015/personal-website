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
  width: 80vw;
  max-height: 84vh;
  color: white;
  padding: 10px 0px 10px 15px;
  border-radius: 5px;
  border: solid 1px teal;
  background-color: rgb(220, 220, 220, 0.1);
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`;

const Text = styled.div`
  padding-right: 10px;
  overflow-y: auto;
  height: 100%;
  text-indent: 2.5em;
  font-size: larger;

  @media screen and (min-width: 768px) {
    font-size: inherit;
  }
`;

function Article(props) {
  const article = props.article || {};

  // account for \n newlines in text
  const formattedText = article.text.split('\n').map(paragraph => {
    const text = paragraph.trim();
    return (
      <p
        style={
          text.charAt(0) === '“' || text.charAt(0) === '"'
            ? { paddingLeft: '1.5em', textIndent: '0' }
            : null
        }
        key={ShortId.generate()}
      >
        {text}
      </p>
    );
  });

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
