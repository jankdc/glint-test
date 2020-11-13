import React, { useState, useEffect } from "react";

import { githubClient, GithubUser } from "../../../clients/github";
import { UserList } from "../../../ui/userList";

function UserListContainer() {
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getUsersWithHighestFollowers = async () => {
      setLoading(true);
      try {
        const users = await githubClient.getUsersWithHighestFollowers();
        setUsers(users);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    getUsersWithHighestFollowers();
  }, []);

  return <UserList users={users} isLoading={isLoading} error={error} />;
}

export default UserListContainer;
