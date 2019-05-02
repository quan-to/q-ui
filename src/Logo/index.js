import React from 'react';
import styled from '@emotion/styled';

const Logo = (props) => {
  const StyledLogo = styled.div`
    width: ${props.width}px;
    height: ${props.height}px;
    background: url(/assets/images/logo.png) no-repeat;
    background-size: 100% auto;
    margin: 0 auto;
  `;

  return (
    <StyledLogo
      className={props.className}
      onClick={props.onClick}
    />
  );
};

export default Logo;
