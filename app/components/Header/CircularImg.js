import styled from 'styled-components';
import React from 'react';
import NormalImg from 'components/Img';

const CircularInnerImg = styled(NormalImg)`
    margin: 0 auto;
    margin-left: -25%;
    height: 100%;
    display: inline;
    width: auto;
    opacity: 100%;
`;

export function CircularImg(props) {
    let marginTop = props.style && props.style.marginTop ? props.style.marginTop : '0px';
    return <div 
            style={{width: '210px', height: '210px', marginTop, zIndex: 999, overflow: 'hidden', borderRadius: '50%'}}>
                <CircularInnerImg {...props}/>
    </div>;  
}