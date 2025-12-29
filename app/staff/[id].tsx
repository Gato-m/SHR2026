import Screen from '../../components/Screen';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { useLocalSearchParams } from 'expo-router';

export default function StaffModal() {
  const { id } = useLocalSearchParams();

  return (
    <Screen style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Darbinieka dati</Text>
      <Text style={{ marginTop: 12 }}>ID: {id}</Text>
      {/* Šeit var pievienot Supabase fetch pēc ID */}
      <Button title="Click me" onPress={() => {}} />
    </Screen>
  );
}
