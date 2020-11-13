import React from "react";
import { graphql } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";

const fakeResponse = {
  search: {
    nodes: [
      {
        name: "some-name1",
        avatarUrl: "some-url1",
        followers: {
          totalCount: 200,
        },
      },
      {
        name: "some-name2",
        avatarUrl: "some-url2",
        followers: {
          totalCount: 100,
        },
      },
    ],
  },
};

const server = setupServer(
  graphql.query("GetUsersWithHighestFollowers", (_, res, ctx) => {
    return res(ctx.data(fakeResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("shows github users", async () => {
  render(<App />);

  expect(await screen.findByTestId("user-list-loading")).toBeInTheDocument();

  const userCards = await waitFor(() => screen.getAllByTestId("user-card"));
  expect(userCards.length).toEqual(2);
  expect(userCards[0]).toHaveTextContent("some-name1");
  expect(userCards[0]).toHaveTextContent("200");
  expect(userCards[1]).toHaveTextContent("some-name2");
  expect(userCards[1]).toHaveTextContent("100");
});

test("shows error state", async () => {
  server.use(
    graphql.query("GetUsersWithHighestFollowers", (_, res, ctx) => {
      return res(ctx.errors([{ message: "Some Server Error" }]));
    })
  );

  render(<App />);

  const error = await waitFor(() => screen.findByTestId("user-list-error"));
  expect(error).toBeInTheDocument();
});
