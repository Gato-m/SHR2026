import { View, Text, ActivityIndicator, Image, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
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

export default function StaffModal() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [staff, setStaff] = useState<StaffMember | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchStaffMember = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('users')
        .select('id, avatar, name, position, email, tel')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error loading staff member', error);
        setError('Neizdevās ielādēt darbinieka datus');
      } else {
        setStaff(data as StaffMember);
      }

      setLoading(false);
    };

    fetchStaffMember();
  }, [id]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error || !staff) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <Text style={{ marginBottom: 12 }}>{error ?? 'Darbinieks nav atrasts'}</Text>
        <Pressable
          onPress={() => router.back()}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: '#007bff',
            borderRadius: 4,
          }}
        >
          <Text style={{ color: 'white', fontWeight: '600' }}>Atpakaļ</Text>
        </Pressable>
        <Image
          source={require('../../assets/cal2.png')}
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 16 }}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16, marginTop: 20, alignItems: 'center' }}>
      {staff.avatar ? (
        <Image
          source={{ uri: staff.avatar }}
          style={{ width: 100, height: 100, borderRadius: 30, marginBottom: 16 }}
        />
      ) : null}

      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 8 }}>{staff.name}</Text>
      {staff.position ? (
        <Text style={{ fontSize: 16, marginBottom: 8 }}>{staff.position}</Text>
      ) : null}
      <Text style={{ marginBottom: 4 }}>{staff.email}</Text>
      <Text style={{ marginBottom: 16 }}>{staff.tel}</Text>

      <Image
        source={require('../../assets/cal2.png')}
        style={{ width: 300, height: 300, marginTop: 5, marginBottom: 30 }}
      />

      <Pressable
        onPress={() => router.back()}
        style={{
          marginTop: 8,
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: '#007bff',
          borderRadius: 4,
        }}
      >
        <Text style={{ color: 'white', fontWeight: '600' }}>Export to PDF</Text>
      </Pressable>
    </View>
  );
}
