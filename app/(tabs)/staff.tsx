import { FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Screen from '../../components/Screen';
import Text from '../../components/Text';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { useTheme } from '../../src/theme/useTheme';

const staffMembers = [
  { id: '1', name: 'Anna Ozola' },
  { id: '2', name: 'Jānis Kalniņš' },
  { id: '3', name: 'Elīna Bērziņa' },
];

export default function StaffList() {
  const { spacing, colors } = useTheme();

  return (
    <Screen style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Personāls</Text>

      <FlatList
        data={staffMembers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ backgroundColor: colors.card, marginBottom: spacing[3] }}>
            <Link href={`/staff/${item.id}`} asChild>
              <Pressable>
                <Text>{item.name}</Text>
              </Pressable>
            </Link>
          </Card>
        )}
      />

      <Button title="Click me" onPress={() => {}} />
    </Screen>
  );
}
