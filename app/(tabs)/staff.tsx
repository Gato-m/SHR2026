import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

type StaffMember = {
  id: string;
  avatar: string | null;
  name: string;
  position: string | null;
  email: string;
  tel: string;
};

export default function StaffList() {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);

  useEffect(() => {
    const fetchStaff = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('id, avatar, name, position, email, tel');

      if (error) {
        console.error('Supabase error:', error);
        return;
      }

      setStaffMembers((data as StaffMember[]) || []);
    };

    fetchStaff();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Personāls</Text>

      <FlatList
        data={staffMembers}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Link href={`/staff/${item.id}`} asChild>
            <Pressable
              style={{
                padding: 12,
                marginBottom: 8,
                backgroundColor: '#eee',
                borderRadius: 6,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}
            >
              {item.avatar ? (
                <Image
                  source={{ uri: item.avatar }}
                  style={{ width: 40, height: 40, borderRadius: 20, marginRight: 12 }}
                />
              ) : null}
              <View>
                <Text style={{ fontWeight: '600' }}>{item.name}</Text>
                {item.position ? <Text>{item.position}</Text> : null}
                <Text>{item.email}</Text>
                <Text>{item.tel}</Text>
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
