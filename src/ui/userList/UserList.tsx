import React from "react";

import { GithubUser } from "../../clients/github";
import { UserCard } from "../userCard";

import { StyledUserList, StyledLoading, StyledError } from "./UserList.styles";

export interface UserListProps {
  users: GithubUser[];
  error?: Error;
  isLoading?: boolean;
}

function UserList({ isLoading, users, error }: UserListProps) {
  return (
    <StyledUserList>
      {error && (
        <StyledError data-testid="user-list-error">
          Something went wrong: ${error.message}
        </StyledError>
      )}
      {isLoading && (
        <StyledLoading data-testid="user-list-loading">
          Loading...
        </StyledLoading>
      )}
      {!isLoading &&
        !error &&
        users.map((user) => <UserCard key={user.name} user={user} />)}
    </StyledUserList>
  );
}

export default UserList;
