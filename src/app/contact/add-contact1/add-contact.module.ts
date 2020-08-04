import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AddContactComponent } from './add-contact.component';
import { FormComponentModule } from 'src/app/components/form/form.component.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, FormComponentModule],
  declarations: [AddContactComponent],
  // exports: [AddContactComponent],
})

export class AddContactComponentModule { }
