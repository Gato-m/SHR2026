import { Tabs } from 'expo-router';
import { useTheme } from '../../src/theme/useTheme';

export default function Layout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.tabBarBackground,
          borderTopColor: colors.border,
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen name="absences" options={{ title: 'Prombūtne' }} />
      <Tabs.Screen name="addData" options={{ title: 'Pievienot datus' }} />
      <Tabs.Screen name="staff" options={{ title: 'Personāls' }} />
    </Tabs>
  );
}
