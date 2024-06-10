import { Component, ViewChild } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (private firestore: Firestore) {

  }

  addData(){
    const ref = collection(this.firestore, 'prove');
    return addDoc(ref, {name: 'nnn'})
  }
}
