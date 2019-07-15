import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';
import If from './../If';
import Icon from './../Icon';

const Avatar = (props) => {
  const StyledAvatar = styled.img`
    width: ${props.size || '80'}px;
    border-radius: ${props.Circle ? '50%' : '0'};
  `
  return (
    <div>
      <If test={props.photo}>
        <StyledAvatar className={props.className} src={props.photo} />
      </If>

      <If test={!props.photo}>
        <StyledAvatar className={props.className} src="https://cdn.dribbble.com/users/44028/avatars/small/6f0aa7f6b5a9bb6ae6c6fa38823995e6.jpg?1527065464" />
      </If>
    </div>
  )
}


export default Avatar;