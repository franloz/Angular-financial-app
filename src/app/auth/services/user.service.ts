import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private auth: Auth,
  ) { }

  public registerUser({ email, password }: User) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  public loginUser({ email, password }: User) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  public logOut() {
    return signOut(this.auth);
  }
}
