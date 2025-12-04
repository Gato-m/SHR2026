import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function StaffModal() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Darbinieka dati</Text>
      <Text style={{ marginTop: 12 }}>ID: {id}</Text>
      {/* Šeit var pievienot Supabase fetch pēc ID */}
    </View>
  );
}
