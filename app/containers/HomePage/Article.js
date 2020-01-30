import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperDiv = styled.div`
    width: 65vw;
    height: 81vh;
    background: rgb(220, 220, 220, 0.8);
    border-radius: 5px;
`;

const Text = styled.div`
    padding: 10px 25px 0px 25px;
    overflow-y: auto;
    max-height: 80vh;
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

