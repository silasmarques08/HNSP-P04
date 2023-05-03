import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex3Component } from './ex3/ex3.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: Ex3Component },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
