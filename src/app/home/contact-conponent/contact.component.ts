import { Component, OnInit } from '@angular/core';
import { DS, Contact } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contacts = [];
  constructor(private ds: DS, private router: Router) { }

  ngOnInit() {
    this.ds.getContacts().subscribe((data: Contact[]) => {
      console.log(data);
      this.contacts = data;
    });
  }
  goToContact(id: number) {
    this.router.navigate(["/ContactView/" + id])
  }

}
