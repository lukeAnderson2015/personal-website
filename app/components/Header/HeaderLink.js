import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  height: 100%;
  margin-right: 30px;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 24px;
  color: black;

  &:active {
    background: #41addd;
    color: #fff;
    text-decoration: underline;
  }

  &:hover {
    background: -webkit-linear-gradient(rgb(211, 211, 211), rgb(150, 200, 200));
    background: -o-linear-gradient(rgb(211, 211, 211), rgb(150, 200, 200));
    background: -moz-linear-gradient(rgb(211, 211, 211), rgb(150, 200, 200));
    background: linear-gradient(rgb(211, 211, 211), rgb(150, 200, 200));
  }
`;
