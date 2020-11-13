import React from "react";
import { GoPerson } from "react-icons/go";

import { StyledFollowers } from "./Followers.styles";

export interface FollowersProps {
  value: number;
}

function Followers({ value }: FollowersProps) {
  return (
    <StyledFollowers>
      <GoPerson /> <strong>{value}</strong>
    </StyledFollowers>
  );
}

export default Followers;
