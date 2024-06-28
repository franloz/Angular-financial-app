import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoaderComponent } from './lazy-loader/lazy-loader.component';



@NgModule({
  declarations: [
    LazyLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazyLoaderComponent,
  ]
})
export class SharedModule { }
