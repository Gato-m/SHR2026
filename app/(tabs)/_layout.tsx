// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../providers/ThemeProvider';
import { icons } from '../icons';

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
      }}
    >
      <Tabs.Screen
        name="absences"
        options={{
          title: 'Prombūtne',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={icons.absences} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Iestatijumi',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={icons.settings} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="staff"
        options={{
          title: 'Darbinieki',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={icons.staff} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addData"
        options={{
          title: 'Pievienot datus',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={icons.staff} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
