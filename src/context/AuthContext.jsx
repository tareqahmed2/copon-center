import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);

  const [isFirstLogin, setFirstLogin] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      toast.success("Signed in successfully with Google!");
      setFirstLogin(true);
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to sign in with Google!");
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUser(null);
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to log out!");
    } finally {
      setLoading(false);
    }
  };

  const signUpWithEmail = async (email, password, photoURL, name) => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setUser((prevUser) => {
        return { ...prevUser, photoURL, displayName: name };
      });
      await setPhoto(photoURL);
      await setName(name);
      toast.success("User signed up successfully!");
      setFirstLogin(true);
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to sign up!");
    } finally {
      setLoading(false);
    }
  };

  const logInWithEmail = async (email, password) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to log in!");
    } finally {
      setLoading(false);
    }
  };
  const resetPassword = async (email) => {
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(error.message);
      or;
      toast.error("Failed to send password reset email!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setFirstLogin(false);
      if (!currentUser) {
      }
    });

    return () => unsubscribe();
  }, []);

  const handleProfileUpdate = async () => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });

        toast.success("Profile updated successfully!");
      } else {
        toast.error("User not authenticated!");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(`Failed to update profile: ${error.message}`);
    }
  };

  const authInfo = {
    user,
    loading,
    photo,
    isFirstLogin,
    setName,
    setPhoto,
    setFirstLogin,
    signInWithGoogle,
    logOut,
    signUpWithEmail,
    logInWithEmail,
    resetPassword,
    handleProfileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
