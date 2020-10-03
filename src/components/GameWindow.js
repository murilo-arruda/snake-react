import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Snake from './Snake';
import Controller from './Controller';
const Grid = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 1px solid black;
`;

// for (i = 0; i < )
export default ({ w, h, snakeSize }) => {
  const [snakePos, setSnake] = useState([
    { l: 0 * snakeSize, t: 0 * snakeSize },
    { l: 1 * snakeSize, t: 0 * snakeSize },
    { l: 2 * snakeSize, t: 0 * snakeSize },
  ]);
  useEffect(() => {
    setSnake([
      { l: 0 * snakeSize, t: 0 * snakeSize },
      { l: 1 * snakeSize, t: 0 * snakeSize },
      { l: 2 * snakeSize, t: 0 * snakeSize },
    ]);
  }, [snakeSize]);
  return (
    <>
      <Controller />
      <Grid width={w} height={h}>
        {snakePos.map((piece) => {
          return (
            <Snake
              snakeSize={snakeSize}
              key={`t${piece.t}l${piece.l}`}
              pos={{ l: piece.l, t: piece.t }}
            />
          );
        })}
      </Grid>
    </>
  );
};
