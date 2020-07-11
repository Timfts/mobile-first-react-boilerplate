import React, { useEffect } from 'react';
import styled from 'styled-components';
import S from '@components/common/TestComponent'

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
}

function useHomePage(){
  useEffect(() => {
    console.log("homepage started")
    
  }, []);
}

interface HomePageProps {
  siteTitle: string
}

export default function HomePageComponent({siteTitle}: HomePageProps){
  useHomePage();
  return (
  <HomePage.Root>
    <HomePage.Header />
    <S />
    {siteTitle}
  </HomePage.Root>
  )
}
