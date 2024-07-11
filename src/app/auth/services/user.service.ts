import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { User } from '../interfaces/user.interface';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public fbErrorMessage: string = '';

  constructor(
    private auth: Auth,
    private firestore: Firestore,
  ) { }

  public getUidUserFb(): string  {
    return this.auth.currentUser!.uid;
  }

  public registerUser({ email, password, apiKey }: User): Promise<{ success: boolean, message?: string }> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(async () => {

        //take uid user and save apikey using his uid as id doc
        const refUser = doc(this.firestore, `users/${this.getUidUserFb()}`);
        return await setDoc(refUser, { apiKey }); // es lo mismo que { apiKey:apikey }
      })
      .then(() => {
        //in this then it enter if setDoc is succesful
        return { success: true };
      })
      .catch(error => {
        if (error.code) {

          switch (error.code) {
            case 'auth/email-already-in-use':
              this.fbErrorMessage = 'This email is already in use.';
              break;
            case 'auth/invalid-email':
              this.fbErrorMessage = 'Please enter a valid email address.';
              break;
            case 'auth/weak-password':
              this.fbErrorMessage = 'Password must be at least 6 characters long.';
              break;
            default:
              this.fbErrorMessage = 'An unexpected error occurred. Please try again later.';
              break;
          }
          return { success: false, message: this.fbErrorMessage };
        } else {
          //setdoc failed
          this.fbErrorMessage = 'An unexpected error occurred. Please try again later.';
          return { success: false, message: this.fbErrorMessage };
        }
      });
  }

  public loginUser({ email, password }: User) {
    return signInWithEmailAndPassword(this.auth, email, password);
    //meter aqui el then y catch y poner await this.getApiKeyFinance();
  }

  public logOut() {
    return signOut(this.auth);
  }

  public forgotPassword(email: string) {

    return sendPasswordResetEmail(this.auth, email);
  }

}
