import Screen from '../../components/Screen';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';
import { useTheme } from '../../src/theme/useTheme';

export default function Preview() {
  const { spacing } = useTheme();

  return (
    <Screen>
      <Text style={{ fontSize: 24, marginBottom: spacing[4] }}>UI Preview</Text>

      <Card style={{ marginBottom: spacing[4] }}>
        <Text>Card example</Text>
      </Card>

      <Input placeholder="Input example" style={{ marginBottom: spacing[4] }} />

      <Button title="Primary Button" onPress={() => {}} />
    </Screen>
  );
}
