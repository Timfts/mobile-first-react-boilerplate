import React from 'react';
import styled from 'styled-components';

import usePage from '@hooks/usePage';

/**
 * This is the basic structure for a component used in the boilerplate
 *  there are three basic sections that define a component:
 *    * A style object - used to define the style of each sub-component, using styled components
 *      like this, allows us to use a BEM-like markup in the view (easier to understand the structure of
 *      the component and differentiate scoped styled components from external imported components,
 *      ex.:  <Example.Header /> is different from a imported <Header />)
 *    * A Logic hook (or controller) - used to define the component logic, mappings and group
 *      any imported hooks.
 *    * View (exported component) - used to define the structure of the component, this is the item
 *      that glues all these items.
 * 
 *  These items can be splited into files using the names:
 *    * Example.tsx
 *    * Example.styled.ts
 *    * Example.hook.ts
 */



// style object
const Example = {
  Root: styled.section`
    background-color:blue;
    height:200px;
    width:100%;
  `,
  Header: styled.header`
    width:100%;
    position:fixed;
    top:0;
    left:0;
    height:100px;
  `,
  Counter: styled.div`
    color:blue;
  `
};

// component hook
function useExample({ pageTitle }: { pageTitle: string }): object {
  const computedValue: number = 2 + 2;
  usePage({ pageTitle });

  return {
    computedValue
  };
}


// component itself or 'view'
export default function ExampleComponent() {
  const { computedValue }: any = useExample({ pageTitle: 'example' });

  return (
    <Example.Root>
      <Example.Header>example page</Example.Header>
      <Example.Counter>{computedValue}</Example.Counter>
    </Example.Root>
  );
}
