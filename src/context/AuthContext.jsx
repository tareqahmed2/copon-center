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

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      toast.success("Signed in successfully with Google!");
    } catch (error) {
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
      toast.error("Failed to log out!");
    } finally {
      setLoading(false);
    }
  };

  const signUpWithEmail = async (email, password, photoURL, displayName) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;

      await updateProfile(newUser, {
        displayName,
        photoURL,
      });

      setUser({ ...newUser, displayName, photoURL });
      toast.success("User signed up successfully!");
    } catch (error) {
      toast.error("Failed to sign up!");
    } finally {
      setLoading(false);
    }
  };

  const logInWithEmail = async (email, password) => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      toast.success("Logged in successfully!");
    } catch (error) {
      toast.error("Failed to log in!");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
    } catch (error) {
      toast.error("Failed to send password reset email!");
    } finally {
      setLoading(false);
    }
  };

  const handleProfileUpdate = async (updatedName, updatedPhoto) => {
    setLoading(true);
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: updatedName,
          photoURL: updatedPhoto,
        });

        setName(updatedName);
        setPhoto(updatedPhoto);
        setUser({
          ...auth.currentUser,
          displayName: updatedName,
          photoURL: updatedPhoto,
        });

        toast.success("Profile updated successfully!");
      } else {
        toast.error("User not authenticated!");
      }
    } catch (error) {
      toast.error(`Failed to update profile: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setName(currentUser?.displayName || null);
      setPhoto(currentUser?.photoURL || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    photo,
    name,
    setName,
    setPhoto,
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
