import styled from 'styled-components';

export default {
  Intro: styled.div`
    text-align: center;
    font-family: pokemon_gb;
    margin: 20px;
  `,
  Title: styled.h1`
    font-size: 42px;
  `,
  Container: styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `,
  Error: styled.div`
    display: flex;
    color: red;
    margin-top: 64px;
  `,
};
