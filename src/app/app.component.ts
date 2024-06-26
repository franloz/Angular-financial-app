import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor ( /* private firestore: Firestore ,private auth: Auth, */) {

  }

  /* async guardar(){

    const ref = doc(this.firestore, `users/${this.auth.currentUser?.uid}`);//inserta un documento q es como un registro
    return await setDoc(ref, {name: 'ssssss'})
  } */
}
