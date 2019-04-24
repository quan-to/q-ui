import React from 'react';
import styled from '@emotion/styled';

const Qymbol = (props) => {
  const StyledSVG = styled.svg`
    width: ${props.blockSize * 3}px;
    height: ${props.blockSize * 4}px;
    background: transparent;
    cursor: pointer;

    > rect {
      width: ${props.blockSize}px;
      height: ${props.blockSize}px;
      fill: ${props.background};
    }

    > rect.selected {
      fill: ${props.foreground};
    }
  `;

  return (
    <StyledSVG
      className={props.className || ''}
      {...props}
    >
      <rect
        x="0"
        y="0"
        className={
          (props.blocks[0][0]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 1}
        y="0"
        className={
          (props.blocks[0][1]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 2}
        y="0"
        className={
          (props.blocks[0][2]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 0}
        y={props.blockSize * 1}
        className={
          (props.blocks[1][0]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 1}
        y={props.blockSize * 1}
        className={
          (props.blocks[1][1]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 2}
        y={props.blockSize * 1}
        className={
          (props.blocks[1][2]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 0}
        y={props.blockSize * 2}
        className={
          (props.blocks[2][0]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 1}
        y={props.blockSize * 2}
        className={
          (props.blocks[2][1]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 2}
        y={props.blockSize * 2}
        className={
          (props.blocks[2][2]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 0}
        y={props.blockSize * 3}
        className={
          (props.blocks[3][0]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 1}
        y={props.blockSize * 3}
        className={
          (props.blocks[3][1]) ? 'selected' : ''
        }
      />
      <rect
        x={props.blockSize * 2}
        y={props.blockSize * 3}
        className={
          (props.blocks[3][2]) ? 'selected' : ''
        }
      />

    </StyledSVG>
  );
};

export default Qymbol;
