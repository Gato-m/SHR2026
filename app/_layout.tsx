import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Modal */}
      <Stack.Screen
        name="staff/[id]"
        options={{ presentation: 'modal', title: 'Darbinieka dati' }}
      />

      {/* Admin drawer */}
      <Stack.Screen name="admin" options={{ headerShown: false }} />
    </Stack>
  );
}
