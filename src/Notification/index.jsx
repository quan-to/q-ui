// @flow

import React from 'react';
import styled from '@emotion/styled';
import { Paragraph } from './../Typo';
import Icon from './../Icon';

type Props = {
  className?: string,
  title?: string,
  message: any,
  onClose: Function,
  crash?: boolean,
  status: boolean,
};


const Notification = (props: Props) => {
  const StyledDiv = styled.div`
    display: ${props.status ? 'block' : 'none'};
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #4664D3;
    padding: 9px 0;
    box-shadow: 0px 0px 34px #313131;

    > button {
      float: right;
      margin: 13px 18px;
      background: none;
      border: none;
    }

    > h3 {
      margin: 17px 27px 0;
      color: #fff;
      text-transform: uppercase;
      font-family: 'Campton';
      font-weight: bolder;
    }

    > p {
      margin: 20px 27px 9px;
      color: #fff;
      text-transform: uppercase;
      font-family: 'Campton';
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
