import React from 'react';
import styled from 'styled-components';

const header = {
  Root: styled.header`
    background-color:red;
    height:80px;
  `,
};


export default function Header(props) {
  return (
    <header.Root>
      headers
    </header.Root>
  );
}