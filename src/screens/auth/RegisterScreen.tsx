import { useState } from 'react';
import { View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../src/firebase';
import { ensureUserDocument } from '../../modules/auth/ensureUserDocument';
import { useTheme } from '../../theme/useTheme';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Text from '../../../components/Text';
import { Link } from 'expo-router';

export default function RegisterScreen({ navigation }) {
  const { spacing } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onRegister = async () => {
    setError('');
    setLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email.trim(), password);
      await ensureUserDocument(res.user.uid, email.trim());
    } catch (e) {
      setError('Neizdevās izveidot kontu');
      console.log(e);
    }

    setLoading(false);
  };

  return (
    <View style={{ flex: 1, padding: spacing.l, justifyContent: 'center' }}>
      <Text variant="title">Izveidot kontu</Text>

      <Input
        label="E-pasts"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ marginTop: spacing.l }}
      />

      <Input
        label="Parole"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginTop: spacing.m }}
      />

      {error ? (
        <Text color="error" style={{ marginTop: spacing.s }}>
          {error}
        </Text>
      ) : null}

      <Button
        title="Reģistrēties"
        onPress={onRegister}
        loading={loading}
        style={{ marginTop: spacing.l }}
      />

      <Button
        variant="text"
        title="Atpakaļ uz pieslēgšanos"
        onPress={() => navigation.goBack()}
        style={{ marginTop: spacing.m }}
      />
    </View>
  );
}
