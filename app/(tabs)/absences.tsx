import { View, Text } from 'react-native';
import { useTheme } from '../providers/ThemeProvider';

export default function Absences() {
  const { colors, spacing } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: spacing.md }}>
      <Text style={{ color: colors.primary, fontSize: 18 }}>Prombūtne</Text>
    </View>
  );
}
