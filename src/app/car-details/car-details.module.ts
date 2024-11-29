import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarDetailsPage } from './car-details.page';

import { IonicModule } from '@ionic/angular';

import { CarDetailsPageRoutingModule } from './car-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarDetailsPageRoutingModule
  ],
  declarations: [CarDetailsPage]
})
export class CarDetailsPageModule {}
