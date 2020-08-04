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
  @Input() contact: Contact;
  formGroup: FormGroup;

  ngOnInit() {
    console.log(this.contact);

    this.formGroup = this.formBuilder.group({
      firstname: [this.contact && this.contact.firstname, Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastname: [this.contact && this.contact.lastname, Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      data: this.formBuilder.array(this.addContactValues()),
    });
  }
  addContactValues() {
    if (this.contact) {
      return this.contact.data.map((c) => this.createItem(c.type, true, c.value))
    } else {
      return [this.createItem("phone", true), this.createItem("email", false)]
    }
  }

  add() {
    (<FormArray>this.formGroup.get('data')).push(this.createItem("phone", false));
  }

  createItem(type: String, requiered: boolean, value?: any): FormGroup {
    return this.formBuilder.group({
      type: [type],
      value: type == "phone" ? [value, Validators.compose([Validators.minLength(10), Validators.pattern('[0-9]*'), requiered ? Validators.required : null])] : [value, Validators.compose([Validators.maxLength(30), Validators.email])],
    });
  }

  emitSubmit(): void {
    this.submit.emit(this.formGroup.value)
  }
  getEmailIndex() {
    return this.formGroup.value["data"].findIndex(c => c.type == 'email')
  }

}
