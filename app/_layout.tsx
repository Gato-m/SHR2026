import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs grupa */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Modal ekrāns */}
      <Stack.Screen
        name="staff/[id]"
        options={{ presentation: 'modal', title: 'Darbinieka dati' }}
      />
    </Stack>
  );
}
