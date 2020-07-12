import React, { useEffect } from 'react';
import styled from 'styled-components';
import TestComponent from '@components/common/TestComponent';

const HomePage = {
  Root: styled.div`
    background-color:red;
    width:100%;
    height:80px;
  `,

  Header: styled.header`
    height:30px;
    width:30px;
    background-color:green;
  `
};

function useHomePage() {
  return 'a';
}

export default function HomePageComponent({ ...props }) {
  useHomePage();
  return (
    <HomePage.Root>
      <HomePage.Header />
      <TestComponent />

    </HomePage.Root>
  );
}
