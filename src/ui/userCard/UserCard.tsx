import React from "react";

import { GithubUser } from "../../clients/github";

import { Name } from "../name";
import { Avatar } from "../avatar";
import { Followers } from "../followers";

import { StyledUserCard, StyledUserDetails } from "./UserCard.styles";

export interface UserCardProps {
  user: GithubUser;
}

function UserCard({ user }: UserCardProps) {
  return (
    <StyledUserCard data-testid="user-card">
      <Avatar url={user.avatarUrl} />
      <StyledUserDetails>
        <Name value={user.name} />
        <Followers value={user.followers.totalCount} />
      </StyledUserDetails>
    </StyledUserCard>
  );
}

export default UserCard;
