import { useState, useEffect } from 'react';
import Screen from '../../components/Screen';
import Text from '../../components/Text';
import Button from '../../components/Button';

import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../src/firebase';

export default function Absences() {
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'success' | 'error'>(
    'checking'
  );
  const [errorMessage, setErrorMessage] = useState<string>('');

  const testConnection = async () => {
    try {
      setConnectionStatus('checking');
      setErrorMessage('');

      // Test writing to Firebase
      await addDoc(collection(db, 'test'), {
        ok: true,
        timestamp: new Date().toISOString(),
      });

      // Test reading from Firebase
      await getDocs(collection(db, 'test'));

      setConnectionStatus('success');
      console.log('Firebase connection successful!');
    } catch (e: any) {
      setConnectionStatus('error');
      setErrorMessage(e?.message || 'Unknown error');
      console.error('Firebase connection error:', e);
    }
  };

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <Screen>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Prombūtnes saraksts</Text>

      <Text style={{ fontSize: 18, marginBottom: 12 }}>Firebase Connection Status:</Text>

      {connectionStatus === 'checking' && (
        <Text style={{ fontSize: 16, color: '#FFA500' }}>Checking connection...</Text>
      )}

      {connectionStatus === 'success' && (
        <Text style={{ fontSize: 16, color: '#00AA00' }}>
          ✓ Successfully connected to Firebase database!
        </Text>
      )}

      {connectionStatus === 'error' && (
        <>
          <Text style={{ fontSize: 16, color: '#FF0000', marginBottom: 8 }}>
            ✗ Failed to connect to Firebase database
          </Text>
          {errorMessage && (
            <Text style={{ fontSize: 14, color: '#FF0000' }}>Error: {errorMessage}</Text>
          )}
        </>
      )}

      <Button title="Test Connection Again" onPress={testConnection} style={{ marginTop: 20 }} />
    </Screen>
  );
}
