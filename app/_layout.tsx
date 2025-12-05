// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="staff/[id]"
        options={{ presentation: 'modal', title: 'Darbinieka dati' }}
      />
      <Stack.Screen name="admin" options={{ headerShown: false }} />
    </Stack>
  );
}
