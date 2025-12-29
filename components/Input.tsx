import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from '../src/theme/useTheme';

export default function Input({ style, ...props }: TextInputProps) {
  const { colors, spacing, radii } = useTheme();

  return (
    <TextInput
      style={[
        {
          borderWidth: 1,
          borderColor: colors.border,
          padding: spacing[3],
          borderRadius: radii.md,
        },
        style,
      ]}
      placeholderTextColor={colors.textSecondary}
      {...props}
    />
  );
}
