import { useTheme } from '../src/theme/useTheme';

export function color(name: keyof ReturnType<typeof useTheme>['colors']) {
  const { colors } = useTheme();
  return colors[name];
}
