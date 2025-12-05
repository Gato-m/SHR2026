import { StyleSheet, View } from 'react-native';
import Soclogo from './Soclogo';

export default function Header() {
  return (
    <View style={styles.logoContainer}>
      <Soclogo style={styles.soclogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: -20,
  },
  soclogo: {
    width: 60,
    height: 60,
  },
});
