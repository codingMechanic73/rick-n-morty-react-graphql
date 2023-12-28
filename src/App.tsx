import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import ModeToggle from '@/components/ModeToggle';
import ThemeProvider from '@/context/ThemeProvider';

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />
        <div>hello</div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
