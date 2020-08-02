import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactViewComponent } from './contact-view.component';


const routes: Routes = [
  {
    path: '',
    component: ContactViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class ContactViewRoutingModule {}
