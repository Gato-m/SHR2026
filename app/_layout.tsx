import { Stack } from 'expo-router';
import { ThemeProvider } from '../src/theme/themeProvider';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        {/* Tabs grupa */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Modal ekrāns */}
        <Stack.Screen
          name="staff/[id]"
          options={{ presentation: 'modal', title: 'Darbinieka dati' }}
        />
      </Stack>
    </ThemeProvider>
  );
}
