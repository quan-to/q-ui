import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const Icon = (props) => {
  const StyledIcon = styled.div`
    display: inline-block;
    width: ${props.size}px;
    height: ${props.size}px;
    background: url(${_theme.iconDirectory}${props.name}.svg) no-repeat;
    background-size: ${props.size}px;
    vertical-align: sub;
  `;

  return(
	  <StyledIcon 
		  className={props.className} 
		  style={props.style}
	  />
  );
};

export default Icon;
