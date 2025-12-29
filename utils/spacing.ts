import { useTheme } from '../src/theme/useTheme';

export function spacing(n: keyof ReturnType<typeof useTheme>['spacing']) {
  const { spacing } = useTheme();
  return spacing[n];
}
