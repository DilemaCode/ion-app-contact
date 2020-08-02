import { Component, OnInit } from '@angular/core';
import { ContactData, Contact } from 'src/app/services/data.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  constructor() {
  }
  phones: ContactData[] = [];
  data: Contact = {};

  ngOnInit() {
    this.addPhone()
  }
  addPhone() {
    this.phones.push({ type: "phone", value: "" });
  }

}
