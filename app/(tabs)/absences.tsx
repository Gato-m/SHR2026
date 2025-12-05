import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { supabase } from '../../lib/supabase'; // pārliecinies, ka lib/supabase.ts ir izveidots

export default function EntryTab() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select('id, name').limit(5);

      if (error) {
        console.error('Supabase error:', error.message);
      } else {
        setUsers(data ?? []);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading users...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First 5 users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.user}>
            {item.id}: {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  user: { fontSize: 16, marginBottom: 8 },
});
