import { Redirect } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '../src/modules/auth/AuthContext';
import { ThemeProvider } from '../src/theme/themeProvider';
import { RootNavigator } from '../src/navigation/RootNavigator';

export default function Index() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}

// export default function Index() {
//   return <Redirect href="/absences" />;
// }
