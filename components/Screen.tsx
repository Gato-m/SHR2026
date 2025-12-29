import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from '../src/theme/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen({ style, children }: ViewProps) {
  const { colors, spacing } = useTheme();

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
          padding: spacing[4],
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}
