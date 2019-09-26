import * as React from 'react';

import {Component, useEffect, useState} from 'react'
import Style from './Animate.style';

const Animate = <P extends object>(animation: 'tada' | 'wobble') => (
  BaseComponent: React.ComponentType<P>,
) => (props: P) => {
  if (animation === 'tada') {
    return (
      <Style.Tada>
        <BaseComponent {...props}/>
      </Style.Tada>
    );
  } else {
    return (
      <Style.Wobble>
        <BaseComponent {...props}/>
      </Style.Wobble>
    );
  }
};

export default Animate;
