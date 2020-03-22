import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public customers = [];
  public uMayProceed = true;
  public _user;

  constructor(private _customerService: CustomerServiceService, private _router: Router) {
  }

  ngOnInit(): void {
    this.customers = this._customerService.getAllCustomers();
  }
  proceed() {
    this.customers = this._customerService.getAllCustomers();
    this.customers.forEach(element => {
      var usernameInput = ((document.getElementById("username") as HTMLInputElement).value);
      var passwordInput = ((document.getElementById("Password") as HTMLInputElement).value);
      this._user = usernameInput;
      try {
        if ((element.accinfo.username == usernameInput) && (element.accinfo.password == passwordInput)) {
          this._router.navigate(['/order', this._user, element.omsId]);
          return;
        } else { this.uMayProceed = false; }
      } catch{

      }

    });
  }
}
