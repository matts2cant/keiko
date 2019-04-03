import styled from 'styled-components';

export default {
  Wrapper: styled.div`
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
