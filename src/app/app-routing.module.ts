import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';

const routes: Routes = [
    { path: 'registration', component: RegisterFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'order/:user/:id', component: OrderFormComponent },
    { path: 'allOrders/:user/:id', component: AllOrdersComponent },
    { path: '', redirectTo: "/login", pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterFormComponent, LoginFormComponent, OrderFormComponent]