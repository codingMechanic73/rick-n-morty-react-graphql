import { ModeToggle } from '@/components/ModeToggle';
import { ThemeProvider } from '@/components/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <div>hello</div>
    </ThemeProvider>
  );
}

export default App;
