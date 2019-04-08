import styled from 'styled-components';

export default {
  PokemonWrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
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
    text-transform: capitalize;
    font-size: 30px;
    text-align: center;
    margin: 20px 0;
    font-family: 'Pokemon', Sans-Serif;
  `,
  Wrapper: styled.div`
    padding: 25px;
  `,
  Attribute: styled.div`
    font-size: 10px;
    font-family: 'Pokemon', Sans-Serif;
    line-height: 15px;
  `,
};
