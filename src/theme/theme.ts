export const theme = {
  colors: {
    primary: '#2ca616ff',
    background: '#FFFFFF',
    text: '#111827',
    textSecondary: '#8d9a8fff',
    border: '#E5E7EB',
    error: '#EF4444',
    card: '#edebebff',
    tabBarBackground: '#FFFFFF',
  },

  spacing: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
  },

  radii: {
    sm: 4,
    md: 8,
    lg: 12,
  },

  typography: {
    fontFamily: 'System',
    sizes: {
      sm: 14,
      md: 16,
      lg: 20,
    },
  },
};

export type Theme = typeof theme;
