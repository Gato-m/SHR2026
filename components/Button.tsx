import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../src/theme/useTheme';

export default function Button({ title, onPress }: { title: string; onPress: () => void }) {
  const { colors, spacing, radii } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        padding: spacing[3],
        borderRadius: radii.md,
      }}
    >
      <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>{title}</Text>
    </TouchableOpacity>
  );
}
