import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customers: any[];
  _db: AngularFireDatabase;
  itemValue = "dsds";

  constructor(db: AngularFireDatabase) {
    this._db = db;
  }

  getAllCustomers() {
    this._db.list('/customers') //list - reading all objects
      .valueChanges()
      .subscribe(customers => {
        this.customers = customers;
      });
    return this.customers;
  }

  postData(ob: object) {
    this._db.list('/customers').push(ob);
  }

}
