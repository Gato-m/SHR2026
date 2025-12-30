import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../modules/auth/AuthContext';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import AdminStack from './AdminStack';

export default function RootNavigator() {
  const { user, role, loading } = useAuth();

  if (loading) return null; // splash screen

  if (!user) return <AuthStack />;

  if (role === 'admin') return <AdminStack />;

  return <UserStack />;
}
