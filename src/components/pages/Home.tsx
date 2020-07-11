import React, { useEffect } from 'react';
import styled from 'styled-components';

const HomePage = {
  Root: styled.div`
    background-color:red;
    width:100%;
    height:80px;
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
  <HomePage.Root>{siteTitle}</HomePage.Root>
  )
}
