import { useState } from 'react';
import { View } from 'react-native';
import { login } from '../../modules/auth/actions';
import { useTheme } from '../../theme/useTheme';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Text from '../../../components/Text';
import { Link } from 'expo-router';

export default function LoginScreen({ navigation }) {
  const { spacing } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onLogin = async () => {
    setError('');
    setLoading(true);

    try {
      await login(email.trim(), password);
    } catch (e) {
      setError('Nepareizs e-pasts vai parole');
      console.log(e);
    }

    setLoading(false);
  };

  return (
    <View style={{ flex: 1, padding: spacing.l, justifyContent: 'center' }}>
      <Text variant="title">Pieslēgties</Text>

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
        title="Pieslēgties"
        onPress={onLogin}
        loading={loading}
        style={{ marginTop: spacing.l }}
      />

      <Button
        variant="text"
        title="Izveidot kontu"
        onPress={() => navigation.navigate('Register')}
        style={{ marginTop: spacing.m }}
      />
    </View>
  );
}
