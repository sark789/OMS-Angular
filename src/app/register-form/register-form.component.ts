import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CustomerServiceService } from '../customer-service.service';


@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  customers = [];
  public show: boolean = false;
  constructor(private _customerService: CustomerServiceService) { }


  ngOnInit(): void {
    this.customers = this._customerService.getAllCustomers();
  }

  postDataToServer() {
    this.show = !this.show;
    var id = this.customers.length;
    var usernameInput = ((document.getElementById("username") as HTMLInputElement).value);
    var passwordInput = ((document.getElementById("Password") as HTMLInputElement).value);
    this._customerService.postData({ omsId: id, accinfo: { username: usernameInput, password: passwordInput }, products: { gtin: 0, quantity: 0 } });
  }
}
