// app/theme.ts
import { Ionicons } from '@expo/vector-icons';

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    muted: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  fonts: {
    regular: string;
    bold: string;
  };
};

export const theme: Theme = {
  colors: {
    primary: '#2E86AB',
    secondary: '#F6C90E',
    background: '#FFFFFF',
    text: '#333333',
    muted: '#888888',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fonts: {
    regular: 'System',
    bold: 'System',
  },
};

export const icons = {
  absences: 'calendar-outline' as keyof typeof Ionicons.glyphMap,
  staff: 'people-outline' as keyof typeof Ionicons.glyphMap,
  settings: 'settings-outline' as keyof typeof Ionicons.glyphMap,
};
