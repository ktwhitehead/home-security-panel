import React from 'react';
import { Circle, LoaderWrapper } from './LoaderStyled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Circle id="circle-0" />
      <Circle id="circle-1" />
      <Circle id="circle-2" />
      <Circle id="circle-3" />
      <Circle id="circle-4" />
    </LoaderWrapper>
  )
}

export default Loader;
