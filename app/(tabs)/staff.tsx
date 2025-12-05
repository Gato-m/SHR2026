import { View, Text, FlatList, Pressable, Image, Linking } from 'react-native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
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
          <View
            style={{
              padding: 12,
              marginBottom: 8,
              backgroundColor: '#eee',
              borderRadius: 6,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link href={`/staff/${item.id}`} asChild>
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                  flex: 1,
                }}
              >
                {item.avatar ? (
                  <Image
                    source={{ uri: item.avatar }}
                    style={{ width: 55, height: 55, borderRadius: 20, marginRight: 12 }}
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

            <Pressable
              onPress={() => {
                if (!item.tel) return;
                Linking.openURL(`tel:${item.tel}`);
              }}
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
              }}
            >
              <Ionicons name="call" size={24} color="#c75f19ff" marginRight={12} />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
