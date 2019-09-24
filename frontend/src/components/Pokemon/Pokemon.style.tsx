import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default {
  PokeBox: styled.div`
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
    text-align: center;
  `,
  Info: styled.ul`
    font-size: 12px;
    text-align: center;
  `,
};
