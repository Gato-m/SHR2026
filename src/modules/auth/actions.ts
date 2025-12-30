import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { ensureUserDocument } from './ensureUserDocument';

export const login = async (email: string, password: string) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  await ensureUserDocument(res.user.uid, email);
  return res.user;
};

export const logout = () => signOut(auth);
