import styled from "styled-components";
import { colors } from "@theme/variables";

export default {
  Root: styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors["cream-tusk"]};
    position: relative;
    display: flex;
    flex-direction: column;

    * > {
      flex-shrink: 0;
      flex-grow: 0;
    }
  `,
  Headercontainer: styled.div`
    background-color: white;
    margin:2px;
  `,
  PageContainer: styled.div``,
};
