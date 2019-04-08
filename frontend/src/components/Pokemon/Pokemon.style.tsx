import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default {
  Wrapper: styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 220px;
    height: 150px;
    border: black 5px double;
    margin: 10px;
    font-family: 'Pokemon', Sans-Serif;
    position: relative;
  `,
  TurnIcon: styled.img`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  `,
  Name: styled.div`
    font-size: 12px;
    text-transform: capitalize;
  `,
  Attribute: styled.div`
    font-size: 10px;
    line-height: 15px;
  `,
};
