import React from 'react';
import usePage from '@hooks/usePage';



function useSecondPage(){
  const pageTitle = 'Second page';
  usePage({pageTitle});
}

export default function SecondPage(){
  useSecondPage();
  return <div>second page</div>;
}
