import React from "react";
import styled from "styled-components";
import usePage from "@hooks/usePage";

import Page from "@components/styled-components/Page";

const HomePage = {
  Root: styled(Page)`
    color:blue;
  `,
};

function useHomePage() {
  const pageTitle = "Welcome";
  usePage({ pageTitle });
}

export default function HomePageComponent({ ...props }) {
  useHomePage();
  return <p>homepage</p>;
}
