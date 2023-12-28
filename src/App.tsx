import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ThemeProvider from '@/context/ThemeProvider';

import HomePage from './pages/HomePage';

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
