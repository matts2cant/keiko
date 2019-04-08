import styled from 'styled-components';
import Pokemon from 'components/Pokemon';
import { Link } from 'react-router-dom';

export default {
  PokemonsWrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  Pokemon: styled(Pokemon)`
    margin: 10px;
  `,
  PageLinkWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  PageLink: styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 30px;
  `,
  Loader: styled.img`
    height: 100px;
    margin: 0 auto;
    display: block;
  `,
  Error: styled.div`
    color: #ef5350;
    font-size: 20px;
    text-align: center;
  `,
  Title: styled.h1`
    font-size: 30px;
    text-align: center;
    margin: 20px 0;
    font-family: 'Pokemon', Sans-Serif;
  `,
  Wrapper: styled.div`
    padding: 25px;
  `,
};
