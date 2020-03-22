import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  public customers = [];
  public user;
  public _db;
  public _id;
  public show = false;


  constructor(private _customerService: CustomerServiceService, private _route: ActivatedRoute, db: AngularFireDatabase, private _router: Router) {

  }

  ngOnInit(): void {
    this._db = this._db;
    this.customers = this._customerService.getAllCustomers();
    let person = this._route.snapshot.paramMap.get('user');
    let id = this._route.snapshot.paramMap.get('id');
    this.user = person;
    this._id = id;

    console.log(this.customers);
  }

  sendOrder() {
    this.show = true;
    var gtin = ((document.getElementById("gtin") as HTMLInputElement).value);
    var quantity = ((document.getElementById("quantity") as HTMLInputElement).value);
    this._customerService.postData({ omsId: this._id, products: { gtin: gtin, quantity: quantity } });
  }

  toAllOrders() {
    this._router.navigate(['/allOrders', this.user, this._id]);
  }

}
