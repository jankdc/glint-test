import React from "react";
import { GoMarkGithub } from "react-icons/go";

import { StyledName } from "./Name.styles";

export interface NameProps {
  value: string;
}

function Name({ value }: NameProps) {
  return (
    <StyledName>
      <GoMarkGithub /> <strong>{value}</strong>
    </StyledName>
  );
}

export default Name;
