import { View, Text, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';

const staffMembers = [
  { id: '1', name: 'Anna Ozola' },
  { id: '2', name: 'Jānis Kalniņš' },
  { id: '3', name: 'Elīna Bērziņa' },
];

export default function StaffList() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Personāls</Text>

      <FlatList
        data={staffMembers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/staff/${item.id}`} asChild>
            <Pressable
              style={{
                padding: 12,
                marginBottom: 8,
                backgroundColor: '#eee',
                borderRadius: 6,
              }}
            >
              <Text>{item.name}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
