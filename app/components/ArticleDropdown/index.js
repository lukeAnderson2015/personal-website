/**
 *
 * ArticleDropdown
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';

const Title = styled.h4`
  width: 100%;
  margin: 0px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: normal;
`;

const SubTitle = styled.p`
  margin: 0;
  font-weight: normal;
  font-style: italic;
`;

const OptionLabelContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  color: teal;
`;

const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'rgb(185, 185, 185)'
      : 'rgb(220, 220, 220)',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center',
    borderBottom: 'solid 1px grey',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'rgb(180, 240, 240)',
    },
  }),
  valueContainer: provided => ({
    ...provided,
    display: 'flex',
    justifyContent: 'center',
    width: '300px',
    height: '50px',
  }),
  indicatorsContainer: provided => ({
    ...provided,
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: 'white',
  }),
  container: provided => ({
    ...provided,
    width: '70vw',
    height: '10vh',
  }),
  control: provided => ({
    ...provided,
    border: '0px',
    height: '10vh',
    background: 'rgb(220, 220, 220, 0.4)',
  }),
  menu: provided => ({
    ...provided,
    margin: 0,
  }),
  menuList: provided => ({
    ...provided,
    padding: 0,
  }),
  singleValue: provided => ({
    ...provided,
    fontSize: '1.1em',
  }),
};

function ArticleDropdown(props) {
  const options = props.articles.map(opt => ({
    value: opt,
    label: opt.title,
  }));

  // eslint-disable-next-line react/prop-types
  const formatOptionLabel = ({ value, label }) => (
    <OptionLabelContainer>
      <Title> {label} </Title>
      <SubTitle>{value ? `${value.date} ~ ${value.genre}` : ''}</SubTitle>
    </OptionLabelContainer>
  );

  return (
    <Select
      styles={selectStyles}
      value={options.filter(o => o.value.id === props.selectedArticle.id)}
      onChange={obj => props.setSelectedArticle(obj.value)}
      options={options}
      formatOptionLabel={formatOptionLabel}
      noOptionsMessage={() => "Doesn't look like anything at all."}
      placeholder="Doesn't look like anything at all."
      menuPortalTarget={document.getElementById('titleListDropdown')}
    />
  );
}

ArticleDropdown.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  selectedArticle: PropTypes.object,
  setSelectedArticle: PropTypes.func,
};

export default memo(ArticleDropdown);
