import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperDiv = styled.div`
    max-width: 55vw;
    max-height: 78vh;

    background: rgb(220, 220, 220, 0.6);
`;

const HeaderDiv = styled.div`
    width: 55vw;
    height: 100px;
    position: absolute;
    padding-Left: 20px;

    background: rgb(220, 220, 220, 0.7);
`;
const Title = styled.h2`
    width: 52vw;
    margin-bottom: 0px;

    font-style: italic;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const SubTitle = styled.p`
    margin-top: 0;
    
    font-weight: normal;
    font-style: italic;
`;

const Text = styled.div`
    margin: 0px;
    padding: 90px 25px 0px 25px;
    overflow-y: auto;
    max-height: 78vh;
    text-indent: 40px;
`;

export default class Article extends React.Component {

    render() {
        let article = this.props.article || {};

        let formattedText = article.text.split ('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>);

        return <WrapperDiv>
                    <HeaderDiv>
                        <Title>{article.title ? article.title : "No Article Selected"}</Title>
                        <SubTitle>{`${article.date} ~ ${article.genre}`}</SubTitle>
                    </HeaderDiv>
                <Text>{formattedText}</Text>
                </WrapperDiv>;
    }
}

Article.propTypes = {
    article: PropTypes.object
};

