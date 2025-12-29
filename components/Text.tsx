import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { useTheme } from '../src/theme/useTheme';

export default function Text({ style, ...props }: TextProps) {
  const { typography, colors } = useTheme();

  return (
    <RNText
      style={[
        {
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.md,
          color: colors.text,
        },
        style,
      ]}
      {...props}
    />
  );
}
