import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="absences" options={{ title: 'Prombūtne' }} />
      <Tabs.Screen name="addData" options={{ title: 'Pievienot datus' }} />
      <Tabs.Screen name="staff" options={{ title: 'Personāls' }} />
    </Tabs>
  );
}
