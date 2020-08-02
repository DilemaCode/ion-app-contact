import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactViewComponent } from './contact-view.component';

import { IonicModule } from '@ionic/angular';

import { ContactViewRoutingModule } from './contact-view.routing.module';
import { FormComponentModule } from 'src/app/components/form/form.component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactViewRoutingModule,
    FormComponentModule
  ],
  declarations: [ContactViewComponent],
})
export class ContactViewModule { }
