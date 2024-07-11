import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoaderComponent } from './components/lazy-loader/lazy-loader.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LazyLoaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LazyLoaderComponent,
    PaginationComponent,
  ]
})
export class SharedModule { }
