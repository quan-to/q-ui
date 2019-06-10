import React from 'react';
import styled from '@emotion/styled';

const Qrect = (props) => {
    return (
        <rect
            x={props.x}
            y={props.y}
            className={
                (props.block) ? 'selected' : ''
            }
            width={props.size}
            height={props.size}
        />
    )
};


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
            <Qrect
                x="0"
                y="0"
                block={props.blocks[0][0]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 1}
                y="0"
                block={props.blocks[0][1]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 2}
                y="0"
                block={props.blocks[0][2]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 0}
                y={props.blockSize * 1}
                block={props.blocks[1][0]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 1}
                y={props.blockSize * 1}
                block={props.blocks[1][1]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 2}
                y={props.blockSize * 1}
                block={props.blocks[1][2]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 0}
                y={props.blockSize * 2}
                block={props.blocks[2][0]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 1}
                y={props.blockSize * 2}
                block={props.blocks[2][1]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 2}
                y={props.blockSize * 2}
                block={props.blocks[2][2]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 0}
                y={props.blockSize * 3}
                block={props.blocks[3][0]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 1}
                y={props.blockSize * 3}
                block={props.blocks[3][1]}
                size={props.blockSize}
            />
            <Qrect
                x={props.blockSize * 2}
                y={props.blockSize * 3}
                block={props.blocks[3][2]}
                size={props.blockSize}
            />

        </StyledSVG>
    );
};

export default Qymbol;
