import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FormComponent } from './form.component';


@NgModule({
    imports: [CommonModule, ReactiveFormsModule, IonicModule, RouterModule],
    declarations: [FormComponent],
    exports: [FormComponent]
})
export class FormComponentModule { }
