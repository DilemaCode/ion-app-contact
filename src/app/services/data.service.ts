import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Storage } from '@ionic/storage';

export interface ContactData {
    type: string; value: any
}

export interface Contact {
    firstname?: string;
    lastname?: string;
    contact?: Array<ContactData>;
}

@Injectable({
    providedIn: 'root'
})
export class DS {
    constructor(private http: HttpClient
        // , public storage: Storage
        ) { }
    jsonUrl = 'assets/data.json';

    getInitialData() {
        return this.http.get(this.jsonUrl);
    }
    getContacts() {
        return this.http.get(this.jsonUrl);
        
    }
    async getContactById(id: number) {
        var contact = {};
        await this.getContacts().toPromise()
            .then(async (data: Contact[]) => {
                data.map((data: Contact, i) => {
                    if (i == id) {
                        contact = data;
                    }
                })
            });
        return contact;
    }

    addContact(contact: Contact) {
        // this.storage.setItem('contacts', JSON.stringify(contact));
    }

  
}