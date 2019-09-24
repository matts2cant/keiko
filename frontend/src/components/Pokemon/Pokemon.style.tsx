import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default {
  PokeBox: styled.div`
    position: relative;
    font-size: 20px;
    width: 256px;
    border: double 6px black;
    margin: 10px;
    padding: 10px;
  `,
  Title: styled.h1`
    font-size: 20px;
    text-align: center;
  `,
  Picture: styled.div`
    height: 96px;
    text-align: center;
  `,
  Info: styled.ul`
    font-size: 12px;
    text-align: center;
  `,
  FlipButton: styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
  `,
};
