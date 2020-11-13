# Additional Questions

**Explain in a few words the design decisions you took developing the above app**

I chose a card-style list because it's the most ubiquitous UX on the internet, making it familiar, hence simpler to the user.

**How would you cache the list of users to display it offline**

I would use `localStorage` to store the fetched data and then use it when there's no available data. I would also update the store everytime we get the fetched data, to prevent it from being stale.

**List some of your favourite libraries with a brief description**

- `msw`: An API mocking library without mocking the network internals
- `redux`: A scalable way of managing state and actions between components
- `storybook`: Streamlines component-driven development and testing
- `react-router`: It simplifies the management of client-side routing

**What are the top 5 tools that you could not live without?**

- `VSCode`: First-class JavaScript/TypeScript tooling support <3
- `Docker`: I love being able to just setup a sandbox without modifying my computer
- `Cypress`: I don't feel safe deploying code without having at least some form of end-to-end testing and this does it well
- `Spotify`: For me, there's nothing like refactoring code with music in the background
- `Debugger`: Chrome developer tools is my go-to
