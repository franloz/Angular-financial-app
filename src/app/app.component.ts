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
    return addDoc(ref, {name: 'nnn'})//todo: y luego commit de firebase y push,,, hacer docker por fin, crear archivo de environments.prod automatico tmb añadir los archivos environments al dockerignore y gitignore? arreglar environments y ignores y readme, hacer estructura base datos
    //?hacer commit cuando acabe firebase y luego otro con docker y otro arreglando ignores y environments
  }
}
