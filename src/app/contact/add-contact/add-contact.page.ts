import { Component, OnInit } from '@angular/core';
import { Contact, DS } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  constructor(private dataService: DS, private router:Router, private location:Location) { }

  ngOnInit() {
    // Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

  }
  submit(data: Contact) {
    if (data.firstname)
      this.dataService.addContact(data).then((status: String) => {
        this.router.navigate(['/home',{}]);
      });
  }
}
