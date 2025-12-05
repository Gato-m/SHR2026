// app/admin/_layout.tsx
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../providers/ThemeProvider';
import { icons } from '../icons';

export default function AdminLayout() {
  const { colors } = useTheme();

  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.muted,
      }}
    >
      <Drawer.Screen
        name="addNewUsers"
        options={{
          title: 'Pievienot lietotājus',
          drawerIcon: ({ color, size }) => (
            <Ionicons name={icons.addUser} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="editUserList"
        options={{
          title: 'Rediģēt sarakstu',
          drawerIcon: ({ color, size }) => (
            <Ionicons name={icons.editList} size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
