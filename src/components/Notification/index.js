import React from 'react';
import styled from '@emotion/styled';
import { Paragraph } from './../Typo';
import Icon from './../Icon';
import _theme from './../Theme';

const Notification = (props) => {
  const StyledDiv = styled.div`
    display: ${props.status ? 'block' : 'none'};
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${_theme.palette.blue};
    padding: ${_theme.rythm.scale[0]}px 0;
    box-shadow: 0px 0px 34px ${_theme.palette.regularGrey};

    > button {
      float: right;
      margin: 13px 18px;
      background: none;
      border: none;
    }

    > h3 {
      margin: 17px ${_theme.rythm.scale[1]}px 0;
      color: #fff;
      text-transform: uppercase;
      font-weight: bolder;
    }

    > p {
      margin: 20px ${_theme.rythm.scale[1]}px 9px;
      color: ${_theme.palette.white};
      text-transform: uppercase;
    }
  `;

  return(
    <StyledDiv
      className={props.className}
    >
      <button onClick={props.onClose}>
        <Icon
          name="close"
          size={16}
        />
      </button>

      <h3>{props.title}</h3>
      <Paragraph>
        {props.message}
      </Paragraph>
    </StyledDiv>
  )
}

export default Notification;
