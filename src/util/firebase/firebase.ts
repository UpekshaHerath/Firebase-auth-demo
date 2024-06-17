import { auth, provider } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
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
    .then((userCredential) => console.log(userCredential.user))
    .catch((error) => {
      console.log(error.code + "\n" + error.message);
    });
};

export { signUp, signIn, signInWithGoogle };
