import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface UserNamePasswordAuthProps {
  email: string;
  password: string;
}

const signUp = ({ email, password }: UserNamePasswordAuthProps) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error.code + "\n" + error.message);
    });
};

const signIn = ({ email, password }: UserNamePasswordAuthProps) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error.code + "\n" + error.message);
    });
};

export { signUp, signIn };
