import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContactPageRoutingModule } from './add-contact-routing.module';

import { AddContactPage } from './add-contact.page';
import { FormComponentModule } from 'src/app/components/form/form.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddContactPageRoutingModule,
    FormComponentModule
  ],
  declarations: [AddContactPage]
})
export class AddContactPageModule {}
