import Animate from "components/HOC/Animate";
import React from 'react';

const Logo = () => (
  <img
    height={40}
    src="https://fontmeme.com/permalink/190314/03655fc9c0c5ef371245622978eaa0a7.png"
    alt="pokemon-go-font"
  />
);

export default Animate('wobble')(Logo);
