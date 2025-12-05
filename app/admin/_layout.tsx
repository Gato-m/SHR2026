import { Drawer } from 'expo-router/drawer';

export default function AdminLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="addNewUsers" options={{ title: 'Pievienot lietotājus' }} />
      <Drawer.Screen name="editUserList" options={{ title: 'Rediģēt sarakstu' }} />
    </Drawer>
  );
}
