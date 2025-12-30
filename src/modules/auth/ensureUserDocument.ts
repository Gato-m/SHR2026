import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

export const ensureUserDocument = async (uid: string, email: string) => {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      email,
      role: 'user',
      createdAt: serverTimestamp(),
    });
  }
};
