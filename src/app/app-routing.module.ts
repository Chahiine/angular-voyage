import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { ListVoyageComponent } from './list-voyage/list-voyage.component';

const routes: Routes = [
  { path: 'addvoyage', component: AddVoyageComponent },
  { path: 'listvoyage', component: ListVoyageComponent },
  { path: '**', redirectTo: '/listvoyage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
