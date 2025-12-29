import React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '../src/theme/useTheme';

export default function Card({ style, ...props }: ViewProps) {
  const { spacing, radii, colors } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: colors.background,
          padding: spacing[4],
          borderRadius: radii.md,
          borderWidth: 1,
          borderColor: colors.border,
        },
        style,
      ]}
      {...props}
    />
  );
}
