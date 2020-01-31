import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export default class Article extends React.Component {

    render() {
        let article = this.props.article || {};

        let formattedText = article.text.split ('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>); // account for \n newlines

        return <WrapperDiv>
                    <Text>{formattedText}</Text>
                </WrapperDiv>;
    }
}

Article.propTypes = {
    article: PropTypes.object
};

