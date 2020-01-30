import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperDiv = styled.div`
    width: 65vw;
    max-height: 98vh;
    border-radius: 5px;
    background: rgb(220, 220, 220, 0.8);
`;

const HeaderDiv = styled.div`
    width: 65vw;
    height: 100px;
    position: absolute;
    padding-left: 20px;
    border-radius: 5px;
    background: rgb(220, 220, 220, 0.8);
`;


const Text = styled.div`
    margin-top: 10px;
    padding: 90px 25px 0px 25px;
    overflow-y: auto;
    max-height: 90vh;
    text-indent: 40px;
`;

export default class Article extends React.Component {

    render() {
        let article = this.props.article || {};

        let formattedText = article.text.split ('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>); // account for \n newlines

        return <WrapperDiv>
                    <HeaderDiv>
                        
                    </HeaderDiv>
                <Text>{formattedText}</Text>
                </WrapperDiv>;
    }
}

Article.propTypes = {
    article: PropTypes.object
};

