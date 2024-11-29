import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Login } from './login';
import { RouterModule } from '@angular/router';
import { LoginPageRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LoginPageRoutingModule
  ],
  declarations: [Login],
})
export class LoginModule {}
