/**
 *
 * ArticleDropdown
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import { windowWidthThreshhold } from '../../utils/constants';

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

const OptionLabelWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  color: white;
`;

const selectStyles = (windowWidth) => ({
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'rgb(0, 0, 0, 0.8)'
      : 'rgb(0, 0, 0, 0.7)',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center',
    borderBottom: 'solid 1px black',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'rgb(0, 128, 128, 0.8)',
    },
    color: 'black',
  }),
  valueContainer: provided => ({
    ...provided,
    display: 'flex',
    justifyContent: 'center',
    width: '300px',
    height: '50px',
  }),
  container: provided => ({
    ...provided,
    width: windowWidth >= windowWidthThreshhold ? '70vw' : '80vw',
    height: '10vh',
  }),
  control: provided => ({
    ...provided,
    border: '1px solid teal',
    height: '10vh',
    background: 'rgb(220, 220, 220, 0.1)',
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
});

function ArticleDropdown({ articles, windowWidth, selectedArticle, setSelectedArticle }) {
  const options = articles.map(opt => ({
    value: opt,
    label: opt.title,
  }));

  // eslint-disable-next-line react/prop-types
  const formatOptionLabel = ({ value, label }) => (
    <OptionLabelWrapper>
      <Title> {label} </Title>
      <SubTitle>{value ? `${value.date} ~ ${value.genre}` : ''}</SubTitle>
    </OptionLabelWrapper>
  );

  return (
    <Select
      styles={selectStyles(windowWidth)}
      value={options.filter(o => o.value.id === selectedArticle.id)}
      onChange={obj => setSelectedArticle(obj.value)}
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
