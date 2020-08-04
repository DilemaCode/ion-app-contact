import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ContactData, Contact } from 'src/app/services/data.service';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Input() editing: boolean;
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      firstname: [null, Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastname: [null, Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      data: this.formBuilder.array([this.createItem("phone", true), this.createItem("email", false)]),
    });

  }

  add() {
    (<FormArray>this.formGroup.get('data')).push(this.createItem("phone", false));
  }

  createItem(type: String, requiered: boolean): FormGroup {
    return this.formBuilder.group({
      type: [type],
      value: type == "phone" ? [null, Validators.compose([Validators.minLength(10), Validators.pattern('[0-9]*'), requiered ? Validators.required : null])] : [null, Validators.compose([Validators.maxLength(30), Validators.email])],
    });
  }

  emitSubmit(): void {
    this.submit.emit(this.formGroup.value)
  }

}
