import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const useUserRole = (user) => {
  const [role, setRole] = useState<'user' | 'admin' | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setRole(null);
      setLoading(false);
      return;
    }

    const load = async () => {
      const ref = doc(db, 'users', user.uid);
      const snap = await getDoc(ref);
      setRole(snap.data()?.role ?? 'user');
      setLoading(false);
    };

    load();
  }, [user]);

  return { role, roleLoading: loading };
};
