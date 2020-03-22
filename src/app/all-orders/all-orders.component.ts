import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  public customers = [];
  public customersToWrite;
  public _user;
  public _id;

  constructor(private _customerService: CustomerServiceService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit(): void {
    this.customers = this._customerService.getAllCustomers();
    let person = this._route.snapshot.paramMap.get('user');
    let id = this._route.snapshot.paramMap.get('id');
    this._user = person;
    this._id = id;

    this.customersToWrite = JSON.stringify(this.customers);
  }

  goToOrder() {
    this._router.navigate(['/order', this._user, this._id]);
  }
}