import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Proveedor de Google
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const register = async ({ email, password, displayName }) => {
    setError("");
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName) await updateProfile(cred.user, { displayName });
    return cred.user;
  };

  const login = async ({ email, password }) => {
    setError("");
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  };

  // 🔹 NUEVO: Login con Google (OAuth 2.0)
  const loginWithGoogle = async () => {
    setError("");
    const result = await signInWithPopup(auth, googleProvider);
    // result.user trae: displayName, email, photoURL, etc.
    return result.user;
  };

  const logout = () => signOut(auth);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        setError,
        register,
        login,
        logout,
        resetPassword,
        loginWithGoogle, // lo exponemos al contexto
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);