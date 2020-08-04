import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Storage } from '@ionic/storage';

export interface ContactData {
    type: string; value: any
}

export interface Contact {
    firstname: string;
    lastname: string;
    data: Array<ContactData>;
}

@Injectable({
    providedIn: 'root'
})
export class DS {
    constructor(private http: HttpClient) { }
    jsonUrl = 'assets/data.json';

    getInitialData() {
        this.http.get(this.jsonUrl).subscribe((data: Contact) => {
            window.localStorage.setItem("contacts", JSON.stringify(data))
        });
    }
    async getContacts() {
        return JSON.parse(localStorage.getItem("contacts"));
    }
    async getContactById(id: number) {
        var contact = {};
        var contacts = JSON.parse(localStorage.getItem("contacts"));
        // await this.getContacts().toPromise()
        //     .then(async (data: Contact[]) => {

        contacts.map((data: Contact, i) => {
            if (i == id) {
                contact = data;
            }
        })
        // });
        return contact;
    }

    async addContact(contact: Contact) {
        var contacts = [];
        if (localStorage.getItem("contacts") != undefined) {
            contacts = JSON.parse(localStorage.getItem("contacts"));
        }
        contacts.push(contact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        return "ok"
        // this.storage.setItem('contacts', JSON.stringify(contact));
    }

    async editContact(id: number, contact: Contact) {

        var contacts = [];
        if (localStorage.getItem("contacts") != undefined) {
            contacts = JSON.parse(localStorage.getItem("contacts"));
        }
        contacts.map((data: Contact, i) => {
            if (i == id) {
                contacts[i] = contact
            }
        })
        localStorage.setItem("contacts", JSON.stringify(contacts));
        
        return "ok";

    }


}