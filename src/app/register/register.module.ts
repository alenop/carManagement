import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Register } from './register';
import { RouterModule } from '@angular/router';
import { RegisterPageRoutingModule } from './register-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RegisterPageRoutingModule
  ],
  declarations: [Register],
})
export class RegisterModule {}
