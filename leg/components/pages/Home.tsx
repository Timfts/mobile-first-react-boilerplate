import React from "react";
import styled from "styled-components";
import usePage from "@hooks/usePage";

import Page from "@components/styled-components/Page";

const HomePage = {
  Root: styled(Page)`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Draggable: styled.div`
    background-color: red;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  `,
};

export default function HomePageComponent({ ...props }) {
  const pageTitle = "Welcome";
  usePage({ pageTitle });

  function onDragBall(ev): void{
    console.log(ev.touches);
  }

  return (
    <HomePage.Root>
      <HomePage.Draggable onTouchStart={onDragBall} />
    </HomePage.Root>
  );
}
