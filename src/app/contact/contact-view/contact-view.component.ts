import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DS, Contact } from '../../services/data.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss'],
})
export class ContactViewComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private ds: DS, private router: Router) {

    this.contactId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.ds.getContactById(this.contactId).then((data: Contact) => this.contact = data);
  }

  contactId: number;
  contact: Contact;
  isEditing = false;
  ngOnInit() {
    console.log(this.contact);
  }

  go(to: String) {
    this.isEditing = to == "edit";
  }

  editContact(contact: Contact) {
    if (contact.firstname)
      this.ds.editContact(this.contactId, contact).
        then((status: String) => {
          this.contact = contact;
          this.isEditing = false;
        });
  }
}
