````md path=README.md mode=EDIT
# CorsRepo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ A demonstration of CORS (Cross-Origin Resource Sharing) implementation using an Nx monorepo with React frontend and Express backend ✨

This workspace showcases how to properly configure CORS between a React application (`cors-ui`) and an Express API (`cors-service`), including handling preflight requests, custom headers, and credentials.

## Applications

### cors-ui (React Frontend)
A React application that demonstrates CORS requests including:
- Simple GET requests
- Complex requests with custom headers (Authorization)
- Credentials handling
- Preflight request scenarios

### cors-service (Express Backend)
An Express API server with CORS middleware configured to:
- Allow specific origins
- Handle custom headers
- Support credentials
- Respond to preflight OPTIONS requests

## Run the Applications

Start the backend API server:
```sh
npx nx serve cors-service
```

Start the frontend development server:
```sh
npx nx serve cors-ui
```

The frontend will run on `http://localhost:4200` and make CORS requests to the backend at `http://localhost:3333`.

## Build Applications

To create production bundles:

```sh
# Build the React frontend
npx nx build cors-ui

# Build the Express backend
npx nx build cors-service
```

## Run Tests

```sh
# Run frontend tests
npx nx test cors-ui

# Run end-to-end tests
npx nx e2e cors-ui-e2e
```

## CORS Features Demonstrated

This project demonstrates key CORS concepts:
- **Simple vs Complex requests**: See how different request types trigger different CORS behavior
- **Preflight requests**: Custom headers trigger OPTIONS preflight requests
- **Credentials handling**: Including cookies and authorization headers
- **Origin validation**: Backend configured to accept requests from specific origins
- **Header allowlisting**: Custom headers like `Authorization` properly configured

Open the browser DevTools Network tab to observe CORS headers and preflight requests in action.

## Project Structure

```
apps/
├── cors-ui/           # React frontend application
├── cors-ui-e2e/       # End-to-end tests
└── cors-service/      # Express backend API
```

## Add New Projects

To generate a new React application:
```sh
npx nx g @nx/react:app my-app
```

To generate a new Express application:
```sh
npx nx g @nx/express:app my-api
```

To generate a new library:
```sh
npx nx g @nx/react:lib my-lib
```

## Useful Commands

```sh
# See all available targets for a project
npx nx show project cors-ui

# View the project dependency graph
npx nx graph

# Run multiple targets across projects
npx nx run-many -t build test lint

# List all projects
npx nx show projects
```

## Learn More

- [Learn about CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Nx Documentation](https://nx.dev)
- [React Documentation](https://react.dev)
- [Express CORS Middleware](https://github.com/expressjs/cors)

## Nx Features Used

- **Monorepo management** with multiple applications
- **Plugin system** for automatic target inference
- **Code generation** for consistent project structure
- **Dependency graph** visualization
- **Task orchestration** and caching
````
