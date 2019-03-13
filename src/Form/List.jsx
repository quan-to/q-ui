// @flow

import React from 'react';
import styled from '@emotion/styled';

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
  border-bottom: solid thin #e0e0e0;
  cursor: pointer;
  font-size: 16px;

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
