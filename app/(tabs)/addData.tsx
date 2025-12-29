import Screen from '../../components/Screen';
import Text from '../../components/Text';
import Button from '../../components/Button';

export default function addData() {
  return (
    <Screen>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Pievienot datus</Text>
      <Button title="Click me" onPress={() => {}} />
    </Screen>
  );
}
