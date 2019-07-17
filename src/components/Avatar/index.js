import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const Avatar = (props) => {
  const StyledAvatar = styled.img`
    width: ${props.size || '80'}px;
    border-radius: ${props.Circle ? '50%' : '0'};
    background-color: ${_theme.palette.regularGrey};
    display: block;
    margin: 27px auto;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, .1);
  `;

  const sourcePhoto = props.photo || '../../assets/icons/avatar-icon.svg';
  return (
    <StyledAvatar 
      className={props.className} 
      src={ sourcePhoto } 
    />
  );
}

export default Avatar;