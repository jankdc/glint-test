import { getConfig } from "../config";

export interface GithubUser {
  name: string;
  followers: { totalCount: number };
  avatarUrl?: string;
}

export class GithubClient {
  private baseUrl = "https://api.github.com";
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async getUsersWithHighestFollowers(): Promise<GithubUser[]> {
    const response = await fetch(`${this.baseUrl}/graphql`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "json/application",
      },
      body: JSON.stringify({
        query: `
          query GetUsersWithHighestFollowers {
            search (
              query: "followers:>=0 sort:followers-desc"
              type: USER
              first: 50
            ) {
              nodes {
                ... on User {
                  name
                  avatarUrl
                  followers {
                    totalCount
                  }
                }
              }
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(
        "Could not fetch users with highest followers due to network"
      );
    }

    const rawResult = await response.json();
    if (rawResult.errors && rawResult.errors.length > 0) {
      throw new Error(rawResult.errors[0].message);
    }

    return rawResult.data.search.nodes;
  }
}

export const githubClient = new GithubClient(
  getConfig("REACT_APP_GITHUB_PERSONAL_TOKEN") ||
    "MISSING_GITHUB_PERSONAL_TOKEN"
);
