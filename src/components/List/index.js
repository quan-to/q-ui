import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const List = (props) => {
  const Ul = styled.ul`
    list-style: none;
  `;
  const Li = styled.li`
    padding: 18px 0;
    border-bottom: ${props.divider ? `solid thin ${_theme.palette.lightGrey}` : 'none'};
  `;

  return(
    <Ul
      {...props}
    >
      {props.items.map((item) => (
        <Li key={item.id}>{item.content}</Li>
      ))}
    </Ul>
  )
}

export default List;
