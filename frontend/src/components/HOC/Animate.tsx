import * as React from 'react';

import {useEffect, useState} from 'react'
import Style from './Animate.style';

/* eslint-disable react-hooks/rules-of-hooks */

const WithAnimation = <P extends object>() => (BaseComponent: React.ComponentType<P>) => (props: P) => {
  return (
    <Style.Wrapper>
        <BaseComponent {...props}/>
    </Style.Wrapper>
  );
};

export default WithAnimation;
