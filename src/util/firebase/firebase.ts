import { auth, provider } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

interface UserNamePasswordAuthProps {
  email: string;
  password: string;
}

const signUp = async ({ email, password }: UserNamePasswordAuthProps) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error.code + "\n" + error.message);
    });
};

const signIn = async ({ email, password }: UserNamePasswordAuthProps) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error.code + "\n" + error.message);
    });
};

const signInWithGoogle = async () => {
  signInWithPopup(auth, provider)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
      return error;
    });
};

const signOutUser = async () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.log(error.code + "\n" + error.message);
    });
};

export { signUp, signIn, signInWithGoogle, signOutUser };
