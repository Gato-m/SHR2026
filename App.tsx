import 'react-native-gesture-handler';
import { ExpoRoot } from 'expo-router';
import { ThemeProvider } from './app/providers/ThemeProvider';

export default function App() {
  const ctx = require.context('./app');
  return (
    <ThemeProvider>
      <ExpoRoot context={ctx} />
    </ThemeProvider>
  );
}
