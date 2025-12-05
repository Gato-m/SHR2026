import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setErrorMsg(error.message);
    } else {
      console.log('Signed up:', data.user);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Sign Up</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      {errorMsg && <Text style={{ color: 'red' }}>{errorMsg}</Text>}
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}
