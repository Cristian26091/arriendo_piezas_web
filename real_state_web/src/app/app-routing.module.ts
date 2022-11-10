import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'index'
    //component: name
  },
  {
    path: 'results'
    //component: name
  },
  {
    path: 'room'
    //component: name
  },
  {
    path: 'contact&support'
    //component: name
  },
  {
    path: 'rent'
    //component: name
  },

  {
    path: 'profile'
    //component: name
  },
  {
    path: '**' //cualquiera sea la ruta (redireccionar)
    //component: name
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
