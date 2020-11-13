import styled from "styled-components";

export const StyledUserCard = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;

  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 2px;

  @media (min-width: 800px) {
    width: 800px;
    flex-direction: row;
  }
`;

export const StyledUserDetails = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  > * {
    flex-grow: 1;
    flex-basis: 0;

    &:first-child {
      margin: 1em 0 0.5em 1em;
    }

    &:last-child {
      margin: 0.5em 0 1em 1em;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;

    > * {
      margin-left: 1em;

      &:first-child {
        margin: 0em 0em 0em 1em;
      }

      &:last-child {
        margin: 0em 0em 0em 1em;
      }
    }
  }
`;
