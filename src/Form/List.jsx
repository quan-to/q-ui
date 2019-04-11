// @flow

import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

type Props = {
  className?: string,
  items: any,
  onClick?: Functon,
};

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  padding: 18px 0;
  border-bottom: solid thin ${_theme.palette.lightGrey};
  cursor: pointer;
  font-size: ${_theme.typo.scale[1]}em;

  :nth-last-child(1) {
    border-bottom: none;
  }
`;

const List = (props:Props) => (
  <Ul
    className={props.className}
  >
    {props.items.map((item) => (
      <Li
        key={item.key}
        onClick={() => props.onClick(item)}
      >{item.content}</Li>
    ))}
  </Ul>
);

export default List;
