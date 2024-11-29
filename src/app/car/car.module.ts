import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { RouterModule } from '@angular/router';
import { CarPageRoutingModule } from './car-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CarPageRoutingModule
  ],
  declarations: [CarComponent],
})
export class CarModule {}
