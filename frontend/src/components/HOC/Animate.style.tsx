import styled from 'styled-components';
import {tadaAnimation, wobbleAnimation} from "../../styles";

export default {
  Tada: styled.div`
    &:hover {
      ${tadaAnimation}
    }
  `,
  Wobble: styled.div`
    &:hover {
      ${wobbleAnimation}
    }
  `,
};
