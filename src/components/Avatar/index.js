import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import THEME from './../Theme';

const activeProps = `
  border-bottom: solid ${THEME.borderAndRadius}px rgba(0, 0, 0, 0);
  box-shadow: none;
  filter: brightness(90%);
`;

const Avatar = (props) => {
  const StyledAvatar = styled.img`
    width: ${props.size || '80'}px;
    border-radius: ${props.circle ? '50%' : '0'};
    background-color: ${THEME.palette.regularGrey};
    display: inline-block;
    margin: 27px auto;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, .1);
    border-bottom: ${props.onClick ? `solid ${THEME.borderAndRadius}px rgba(0, 0, 0, 0.4)` : 'none'};
    cursor: ${props.onClick ? 'pointer' : 'arrow'};
    transition: all ${THEME.transitionProps};
    
    :active {
      ${props.onClick ? activeProps : ''}
    }
  `;

  const sourcePhoto = props.photo || '../../assets/icons/avatar-icon.svg';
  return (
    <StyledAvatar
      className={props.className}
      style={props.style}
      src={sourcePhoto}
      onClick={props.onClick}
      circle={props.circle}
    />
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  circle: PropTypes.bool,
};

export default Avatar;