import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Snake = styled.div`
  box-sizing: border-box;

  width: ${(props) => props.snakeSize}px;
  height: ${(props) => props.snakeSize}px;
  margin: 0;
  padding: 0;
  border: 1px solid blue;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

// move = { direction: (top, bottom, left, right), fruit: bool}
// every time snake recive a signal for move the array should update.
export default ({ snakeSize, pos, move }) => {
  return <Snake snakeSize={snakeSize} left={pos.l} top={pos.t}></Snake>;
};
