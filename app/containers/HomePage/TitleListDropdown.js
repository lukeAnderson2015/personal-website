import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    width: 65vw;
    height: 50px;
`;

const Title = styled.h2`
    width: 62vw;
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

const Option = styled.option`
    display: inline-block;
    width: 100%;
    height: 50px;
    padding: 10px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
    background-color: rgb(220, 220, 220, 0.6);

    :hover {
        border: solid grey 1px;
        cursor: pointer;
        color: white;
        background-color: rgb(25, 76, 127, 0.8);
    }
`;

export default class TitleListDropdown extends React.Component {

    state = {
        dropdownOpen: false
    }

    setDropdown(bool) {
        this.setState({dropdownOpen: bool})
    }


    render() {
        const options = this.props.options.map(a => {
            return <Option
                        style={a.id === this.state.selectedArticle.id ? {backgroundColor: 'rgb(25, 76, 127, 0.85)', color: 'white', textDecoration: 'underline'} : {} }
                        onClick={() => this.setSelectedArticle(a)}
                        value={a.title}
                        key={a.id} 
                    >
                        <Title>{a.title ? a.title : "No Article Selected"}</Title>
                        <SubTitle>{`${a.date} ~ ${a.genre}`}</SubTitle>
                    </Option>;
        });

        return (
            <Select name="articleSelect" onClick={() => this.setDropdown(!this.state.dropdownOpen)}>
                {options}
            </Select>
        );
    }
}