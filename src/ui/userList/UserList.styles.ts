import styled from "styled-components";

export const StyledUserList = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 1em auto;
  }

  @media (min-width: 800px) {
    display: block;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

export const StyledLoading = styled.p`
  text-align: center;
`;

export const StyledError = styled.strong`
  text-align: center;
`;
